<?php

namespace App\Http\Controllers;

use App\Models\Investor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Exports\InvestorsExport;
use App\Imports\InvestorsImport;
use Maatwebsite\Excel\Facades\Excel;

class InvestorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Investor::all();
    }

    /**
     * Export Investors to Excel Format
     */

    public function export()
    {
        return Excel::download(new InvestorsExport, 'investors.xlsx');
    }

    /**
     * Import Investors from Excel Sheet
     */

    public function import()
    {
        Excel::import(new InvestorsImport, 'investors.xlsx');

        return 'Success';
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

        return $investor;
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
     * @param  \App\Models\Investor  $investor
     * @return \Illuminate\Http\Response
     */
    public function show(Investor $investor)
    {
        return $investor;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Investor  $investor
     * @return \Illuminate\Http\Response
     */
    public function edit(Investor $investor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Investor  $investor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Investor $investor)
    {
        $validatedData = $this->validateData($request, true); // update set to true

        $investor->update($validatedData);

        $investor->refresh();

        return $investor;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Investor  $investor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Investor $investor)
    {
        $investor->delete();

        return "Successfully deleted";
    }

    // Auxilliary Functions
    
    private function validateData($request, $update=false)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => $update ? 'required' : 'required|unique:investors',
            'address' => 'required',
            'phone' => 'required',
            'bank' => 'required',
            'account_name' => 'required',
            'account_number' => 'required',
        ]);

        return $data;
    }

    public function forceDeleteInvestor($investor)
    {
        $investor = $this->getTrashedInvestor($investor);

        $investor->forceDelete();

        return "Forcefully deleted";
    }

    public function restoreInvestor($investor)
    {
        $investor = $this->getTrashedInvestor($investor);

        $investor->restore();

        return $investor;
    }

    private function getTrashedInvestor($id)
    {
        return Investor::onlyTrashed()
                ->where('slug', $id)
                ->first();
    }
}
