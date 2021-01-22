<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index()
    {
        $investors = \App\Models\Investor::all();

        $response = [];

        foreach($investors as $investor)
        {
            foreach($investor->notifications as $notification){
                $response[] = ['message' => $notification->data['message'], 'url' => $notification->data['url'], 'read' => $notification->read_at];
                // $notification->markAsRead();
            }
        }

        $response = collect($response);

        $jsonResponse = $response->toJson();

        return $response;
    }
}
