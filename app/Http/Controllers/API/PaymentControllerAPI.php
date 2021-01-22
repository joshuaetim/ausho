<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;

class PaymentControllerAPI extends BaseController
{
    public $user;

    /**
     * Get User from Auth Service First
     */
    public function __construct()
    {
        $this->user = auth('api')->user();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $payments = $this->user->payments;

        return $this->sendResponse([
            'payments' => $payments, 
            'count' => $payments->count(),
        ], 'Data retrieved successfully');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $payment
     * @return \Illuminate\Http\Response
     */
    public function show($payment)
    {
        $payment = $this->user->payments()->where('id', $payment)->first();

        if(! $payment){
            return $this->resourceNotFoundResponse('payment');
        }

        return $this->sendResponse($payment, 'Data retrieved successfully');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Submit Payment 
     * 
     * @param int $payment
     * @return Illuminate\Http\Response
     */
    public function submit($payment)
    {
        $payment = $this->user->payments()->where('id', $payment)->first();

        if(! $payment){
            return $this->resourceNotFoundResponse('payment');
        }

        $payment->status = 'completed';
        $payment->save();

        return $this->sendResponse($payment, 'Payment submitted successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $payment)
    {
        $validatedData = $request->validate([
            'amount' => 'nullable',
            'status' => 'nullable',
        ]);

        $payment = $this->user->payments()->where('id', $payment)->first();

        if(! $payment){
            return $this->resourceNotFoundResponse('payment');
        }

        $payment->update($validatedData);

        $payment->refresh();

        return $this->sendResponse($payment, 'Payment Updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy($payment)
    {
        $payment = $this->user->payments()->where('id', $payment)->first();

        if(! $payment){
            return $this->resourceNotFoundResponse('payment');
        }

        $payment->delete();

        return $this->sendResponse([], 'Payment deleted');
    }
}
