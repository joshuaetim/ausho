<?php

namespace App\Http\Controllers;

use PDF;

use App\Models\Investor;
use App\Models\Investment;
use Illuminate\Http\Request;

class PDFController extends Controller
{
    public function createPDF(Investor $investor, Investment $investment)
    {
        $investment = $investor->investments()->where('id', $investment->id)->first(); // just to ensure the right guy is calling the right investment

        if(!$investment)
        {
            return '404';
        }

        view()->share('investment', $investment); // share investment data to all views
        
        $pdf = PDF::loadView('test');
        $filename = 'investment'.date("Y-F-j-g_i_s-a").'.pdf';
        return $pdf->download($filename);
        // $pdf = new PDF;
        // return var_dump($pdf);
    }
}
