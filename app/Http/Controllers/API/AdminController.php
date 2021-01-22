<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;

class AdminController extends BaseController
{
    public function showUsers()
    {
        $users = User::all();

        return $this->sendResponse($users, 'Data retrieved successfully');
    }
}
