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
    public $user;

    public function temp()
    {
        return auth()->user()->investors;
    }

    /**
     * Display a listing of the resource. 
     * Only displays investor of related User
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $investors = auth()->user()->investors;

        return $this->sendResponse($investors, 'Data retreived successfully');
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
        $investor = auth()->user()->investors()->create($validatedData);
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
    public function show($investor)
    {
        $data = auth()->user()->investors()->where('slug', $investor)->first();

        if(! $data){
            return $this->resourceNotFoundResponse('investor');
        }

        return $this->sendResponse($data, 'Data retrieved');
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
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $investor)
    {
        $validatedData = $this->validateData($request, true); // update set to true

        $investor = auth()->user()->investors()->where('slug', $investor)->first();

        if(! $investor){
            return $this->resourceNotFoundResponse('investor');
        }

        $investor->update($validatedData);

        $investor->refresh();

        return $this->sendResponse($investor, 'Data updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $investor
     * @return \Illuminate\Http\Response
     */
    public function destroy($investor)
    {
        $investor = auth()->user()->investors()->where('slug', $investor)->first();

        if(! $investor){
            return $this->resourceNotFoundResponse('investor');
        }

        $investor->delete();

        return $this->sendResponse([], 'Successfully deleted');
    }

    /**
     * Enfore complete deletion of resource
     * @param string $investor
     * @return \Illuminate\Http\Response
     */
    public function forceDeleteInvestor($investor)
    {
        $investor = $this->getTrashedInvestor($investor);

        if(! $investor){
            return $this->resourceNotFoundResponse('investor');
        }

        $investor->forceDelete();

        return $this->sendResponse([], 'Investor has been permanently deleted');
    }

    /**
     * Restore Soft-Deleted resources
     */
    public function restoreInvestor($investor)
    {
        $investor = $this->getTrashedInvestor($investor);

        if(! $investor){
            return $this->resourceNotFoundResponse('investor');
        }

        $investor->restore();

        return $this->sendResponse($investor, 'Investor restored Successfully');
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

    private function getTrashedInvestor($id)
    {
        return auth()->user()->investors()->onlyTrashed()
                ->where('slug', $id)
                ->first();
    }
    
}
