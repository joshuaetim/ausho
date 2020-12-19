<?php

namespace App\Http\Controllers\API;

use App\Models\Investor;
use Illuminate\Http\Request;
use App\Events\InvestmentCreated;
use App\Http\Controllers\API\BaseController;

class InvestmentControllerAPI extends BaseController
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
     * Display listing of resource
     */
    public function index()
    {
        $investments = $this->user->investments;

        return $this->sendResponse($investments, 'Data retrieved successfully');
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

        // checks if the user data are actually accurate

        $investor = $this->user->investors()->where('id', $request->investor_id)->first();

        if(! $investor){
            return $this->resourceNotFoundResponse('investor');
        }

        $category = $this->user->categories()->where('id', $request->category_id)->first();

        if(! $category){
            return $this->resourceNotFoundResponse('category');
        }

        // end check

        $investment = $this->user->investments()->create($validatedData);

        event(new InvestmentCreated($investment, $investor)); // dispatches event for other guys to handle

        return $this->sendResponse($investment, 'Investment Created Successfully', 201);
    }

     /**
     * Display the specified resource.
     *
     * @param  \App\Models\Investment  $investment
     * @return \Illuminate\Http\Response
     */
    public function show($investment)
    {
        $investment = $this->user->investments()->where('id', $investment)->first();

        if(! $investment){
            return $this->resourceNotFoundResponse('investment');
        }

        return $this->sendResponse($investment, 'Data retreived successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Investment  $investment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $investment)
    {
        $validatedData = $this->validateData($request, true);

        $investment = $this->user->investments()->where('id', $investment)->first();

        if(! $investment){
            return $this->resourceNotFoundResponse('investment');
        }

        // check if the category still belongs to current user

        $category = $this->user->categories()->where('id', $request->category_id)->first();

        if(! $category){
            return $this->resourceNotFoundResponse('category');
        }

        $investment->update($validatedData);

        $investment->refresh();

        return $this->sendResponse($investment, 'Investment updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $investment
     * @return \Illuminate\Http\Response
     */
    public function destroy($investment)
    {
        $investment = $this->user->investments()->where('id', $investment)->first();

        if(! $investment){
            return $this->resourceNotFoundResponse('investment');
        }

        $investment->delete();

        return $this->sendResponse([], "Successfully deleted");
    }

    public function forceDeleteInvestment($investment)
    {
        $investment = $this->getTrashedInvestment($investment);

        if(! $investment){
            return $this->resourceNotFoundResponse('investment');
        }

        $investment->forceDelete();

        return $this->sendResponse([], 'Investment has been permanently deleted');
    }

    public function restoreInvestment($investment)
    {
        $investment = $this->getTrashedInvestment($investment);

        if(! $investment){
            return $this->resourceNotFoundResponse('investment');
        }

        $investment->restore();

        return $this->sendResponse($investment, 'Investment restored successfully');
    }

    private function getTrashedInvestment($id)
    {
        return $this->user->investments()->onlyTrashed()
                ->where('id', $id)
                ->first();
    }

    // auxilliary functions
    
    private function validateData($data, $update = false)
    {
        if($update){
            return $data->validate([
                'name' => 'required',
                'amount' => 'required',
                'rate' => 'required',
                'frequency' => 'required',
                'duration' => 'required',
                'category_id' => 'required',
            ]);
        }

        return $data->validate([
                'name' => 'required',
                'amount' => 'required',
                'rate' => 'required',
                'frequency' => 'required',
                'duration' => 'required',
                'category_id' => 'required',
                'investor_id' => 'required',
            ]);
    }

    
}
