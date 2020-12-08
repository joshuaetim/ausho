<?php

namespace App\Http\Controllers\API;

use App\Models\Investor;
use Illuminate\Http\Request;
use App\Events\InvestmentCreated;
use App\Http\Controllers\API\BaseController;
use App\Http\Resources\Investor as InvestorResource;

class InvestorControllerAPI extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $investors = Investor::all();

        return $this->sendResponse(InvestorResource::collection($investors), 'Data retreived successfully');
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Investor $investor)
    {
        return $this->sendResponse(new InvestorResource($investor), 'Data retrieved successfully');
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    // auxilliary functions
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
