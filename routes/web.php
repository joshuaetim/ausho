<?php

use App\Jobs\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\API\PaymentControllerAPI;
use App\Http\Controllers\API\CategoryControllerAPI;
use App\Http\Controllers\API\InvestorControllerAPI;
use App\Http\Controllers\API\InvestmentControllerAPI;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\InvestorController;

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

Route::get('/{path?}', function() {
    return view('app');
})->where('path', '^(?!api).*$');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function(){
    return 'API end point working well';
});

Route::get('/login', function(){
    return view('auth.login');
})->name('login');

Route::get('/home', function(){
    return view('home');
})->middleware('auth:sanctum');

Route::get('/csrf', function(){
    return response('', 204);
});

Route::get('/users', [AdminController::class, 'showUsers']);

Route::get('/checkUser', function(){
    return auth()->user();
});

Route::get('api/temp', [InvestorControllerAPI::class, 'temp'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function(){

    Route::prefix('api/investors')->group(function(){

        Route::get('/', [InvestorControllerAPI::class, 'index']);
    
        Route::get('/{investor}', [InvestorControllerAPI::class, 'show']);
    
        Route::post('/', [InvestorControllerAPI::class, 'store']);
    
        Route::put('/{investor}', [InvestorControllerAPI::class, 'update']);
    
        Route::delete('/{investor}', [InvestorControllerAPI::class, 'destroy']);
    
        Route::delete('/{investor}/force', [InvestorControllerAPI::class, 'forceDeleteInvestor']);
    
        Route::post('/{investor}/restore', [InvestorControllerAPI::class, 'restoreInvestor']);
    
    });
    
    Route::prefix('api/categories')->group(function(){
    
        Route::get('/', [CategoryControllerAPI::class, 'index']);
    
        Route::get('/{category}', [CategoryControllerAPI::class, 'show']);
    
        Route::post('/', [CategoryControllerAPI::class, 'store']);
    
        Route::put('/{category}', [CategoryControllerAPI::class, 'update']);
    
        Route::delete('/{category}', [CategoryControllerAPI::class, 'destroy']);
    
    });
    
    Route::prefix('investments')->group(function(){
    
        Route::get('/', [InvestmentControllerAPI::class, 'index']);
    
        Route::get('/{investment}', [InvestmentControllerAPI::class, 'show']);
    
        Route::post('/', [InvestmentControllerAPI::class, 'store']);
    
        Route::put('/{investment}', [InvestmentControllerAPI::class, 'update']);
    
        Route::delete('/{investment}', [InvestmentControllerAPI::class, 'destroy']);
    
        Route::delete('/{investment}/force', [InvestmentControllerAPI::class, 'forceDeleteInvestment']);
    
        Route::post('/{investment}/restore', [InvestmentControllerAPI::class, 'restoreInvestment']);
    
    });
    
    Route::prefix('payments')->group(function(){
    
        Route::get('/', [PaymentControllerAPI::class, 'index']);
    
        Route::get('/{payment}', [PaymentControllerAPI::class, 'show']);
    
        Route::get('/{payment}/submit', [PaymentControllerAPI::class, 'submit']);
    
        Route::put('/{payment}', [PaymentControllerAPI::class, 'update']);
    
        Route::delete('/{payment}', [PaymentControllerAPI::class, 'destroy']);
    
    });

    // Route::post('/api/logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/test', [NotificationController::class, 'index']);

Route::view('/import', 'import');


Route::get('/download/{investor}/{investment}', [PDFController::class, 'createPDF']);

Route::get('/export-investors', [InvestorController::class, 'export']);

Route::post('/import-investors', [InvestorController::class, 'import']);