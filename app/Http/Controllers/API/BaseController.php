<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    /**
     * Sends a successful response
     * @return Illuminate\Http\Response
     */
    public function sendResponse($data, $message, $code = 200)
    {
        $response = [
            'success' => true,
            'data' => $data,
            'message' => $message,
        ];

        return response()->json($response, $code);
    }

    /**
     * Sends an error response
     * @return Illuminate\Http\Response
     */
    public function sendError($message, $errorMessages = [], $code = 400)
    {
        $response = [
            'success' => false,
            'message' => $message,
        ];

        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);
    }
}
