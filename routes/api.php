<?php

use App\Jobs\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\InvestorController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('investors')->group(function(){

    Route::get('/', [InvestorController::class, 'index']);

    Route::get('/{investor}', [InvestorController::class, 'show']);

    Route::post('/', [InvestorController::class, 'store']);

    Route::put('/{investor}', [InvestorController::class, 'update']);

    Route::delete('/{investor}', [InvestorController::class, 'destroy']);

    Route::delete('/{investor}/force', [InvestorController::class, 'forceDeleteInvestor']);

    Route::post('/{investor}/restore', [InvestorController::class, 'restoreInvestor']);

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

// Route::get('/test', [NotificationController::class, 'index']);

Route::get('/test', function(){
    $sid = config('values.key_secret');
    return $sid;
});