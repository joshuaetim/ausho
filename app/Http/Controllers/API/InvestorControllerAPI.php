<?php

namespace App\Http\Controllers\API;

use App\Models\Investor;
use Illuminate\Support\Str;
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
    public function store(Request $request)
    {
        $validatedData = $this->validateData($request);

        $investor = $this->createInvestor($validatedData);

        return $this->sendResponse(new InvestorResource($investor), 'Record successfully saved');
    }

    /**
     * Handles logic for creating investor
     */
    public function createInvestor($validatedData)
    {
        $investor = Investor::create($validatedData);
        $slug = Str::slug($investor->name. ' ' .$investor->id, '-');
        $investor->slug = $slug;
        $investor->save();

        return $investor;
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
    
    private function validateData($request, $update=false)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => $update ? 'required' : 'required|email|unique:investors',
            'address' => 'required',
            'phone' => 'required',
            'bank' => 'required',
            'account_name' => 'required',
            'account_number' => 'required',
        ]);

        return $data;
    }
}
