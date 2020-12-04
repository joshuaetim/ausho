<?php

use App\Jobs\Test;
use Carbon\Carbon;
use App\Models\Investment;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\InvestorController;
use App\Http\Controllers\NotificationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/investors', [InvestorController::class, 'index']);

Route::get('/investor/{investor}', [InvestorController::class, 'show']);

Route::view('/import', 'import');

Route::post('/investors', [InvestorController::class, 'store']);

Route::get('/download/{investor}/{investment}', [PDFController::class, 'createPDF']);

Route::get('/export-investors', [InvestorController::class, 'export']);

Route::post('/import-investors', [InvestorController::class, 'import']);