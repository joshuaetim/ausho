<?php

use App\Jobs\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\API\InvestorControllerAPI;
use App\Http\Controllers\InvestmentController;
use App\Http\Controllers\NotificationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function(){

    Route::prefix('investors')->group(function(){

        Route::get('/', [InvestorControllerAPI::class, 'index']);
    
        Route::get('/{investor}', [InvestorControllerAPI::class, 'show']);
    
        Route::post('/', [InvestorControllerAPI::class, 'store']);
    
        Route::put('/{investor}', [InvestorControllerAPI::class, 'update']);
    
        Route::delete('/{investor}', [InvestorControllerAPI::class, 'destroy']);
    
        Route::delete('/{investor}/force', [InvestorControllerAPI::class, 'forceDeleteInvestor']);
    
        Route::post('/{investor}/restore', [InvestorControllerAPI::class, 'restoreInvestor']);
    
    });
    
    Route::prefix('categories')->group(function(){
    
        Route::get('/', [CategoryController::class, 'index']);
    
        Route::get('/{category}', [CategoryController::class, 'show']);
    
        Route::post('/', [CategoryController::class, 'store']);
    
        Route::put('/{category}', [CategoryController::class, 'update']);
    
        Route::delete('/{category}', [CategoryController::class, 'destroy']);
    
    });
    
    Route::prefix('investments')->group(function(){
    
        Route::get('/', [InvestmentController::class, 'index']);
    
        Route::get('/{investment}', [InvestmentController::class, 'show']);
    
        Route::post('/{investor}', [InvestmentController::class, 'store']);
    
        Route::put('/{investment}', [InvestmentController::class, 'update']);
    
        Route::delete('/{investment}', [InvestmentController::class, 'destroy']);
    
        Route::delete('/{investment}/force', [InvestmentController::class, 'forceDeleteInvestment']);
    
        Route::post('/{investment}/restore', [InvestmentController::class, 'restoreInvestment']);
    
    });
    
    Route::prefix('payments')->group(function(){
    
        Route::get('/', [PaymentController::class, 'index']);
    
        Route::get('/{payment}', [PaymentController::class, 'show']);
    
        Route::get('/{payment}/submit', [PaymentController::class, 'submit']);
    
        Route::put('/{payment}', [PaymentController::class, 'update']);
    
        Route::delete('/{payment}', [PaymentController::class, 'destroy']);
    
    });

    Route::post('logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/test', [NotificationController::class, 'index']);

Route::get('/test', function(){
    return 'API end point working well';
});