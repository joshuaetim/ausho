<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    public function render($request, Throwable $e)
    {
        if($e instanceof ModelNotFoundException){
            if($request->is('api/*')){
                return response()->json([
                    'error' => 'Resource not found',
                ], 404);
            }
        }

        return parent::render($request, $e);
    }

    public function unauthenticated($request, AuthenticationException $e)
    {
        return response()->json([
            'error' => 'Unauthorized',
        ], 401);
    }
}
