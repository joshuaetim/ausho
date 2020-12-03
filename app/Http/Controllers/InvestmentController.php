<?php

namespace App\Http\Controllers;

use App\Models\Investor;
use App\Models\Investment;
use Illuminate\Http\Request;
use App\Classes\ProcessPayment;
use App\Events\InvestmentCreated;

class InvestmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Investment::all();
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
    public function store(Request $request, Investor $investor)
    {
        $validatedData = $this->validateData($request);

        $investment = $investor->investments()->create($validatedData);

        event(new InvestmentCreated($investment, $investor)); // dispatches event for other guys to handle

        return $investment;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Investment  $investment
     * @return \Illuminate\Http\Response
     */
    public function show(Investment $investment)
    {
        return $investment;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Investment  $investment
     * @return \Illuminate\Http\Response
     */
    public function edit(Investment $investment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Investment  $investment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Investment $investment)
    {
        $validatedData = $this->validateData($request);

        $investment->update($validatedData);

        $investment->refresh();

        return $investment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Investment  $investment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Investment $investment)
    {
        $investment->delete();

        return "Successfully deleted";
    }

    public function forceDeleteInvestment($investment)
    {
        $investment = $this->getTrashedInvestment($investment);

        $investment->forceDelete();

        return "Forcefully deleted";
    }

    public function restoreInvestment($investment)
    {
        $investment = $this->getTrashedInvestment($investment);

        $investment->restore();

        return $investment;
    }

    private function getTrashedInvestment($id)
    {
        return Investment::onlyTrashed()
                ->where('id', $id)
                ->first();
    }

    private function validateData($data)
    {
        return $data->validate([
                'name' => 'required',
                'amount' => 'required',
                'rate' => 'required',
                'frequency' => 'required',
                'duration' => 'required',
                'category_id' => 'required',
            ]);
    }
}
