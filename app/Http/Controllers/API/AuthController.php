<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\API\BaseController;

class AuthController extends BaseController
{
    /**
     * API resource to register user
     * @param Request
     * @return Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $input = $request->only('name', 'email', 'password', 'c_password');

        $validator = Validator::make($input, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'c_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation error', $validator->errors(), 400);
        }

        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        $success['token'] = $user->createToken('InvestApp')->accessToken;
        $success['user'] = $user->name;

        return $this->sendResponse($success, 'Successfully created account', 201);
    }

    /**
     * API resource to login user
     * @param Request
     * @return Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if(Auth::attempt($credentials)){
            $user = Auth::user();
            $success['token'] = $user->createToken('InvestApp')->accessToken;
            $success['user'] = $user->name;

            return $this->sendResponse($success, 'Login successfully', 200);
        }
        else{
            return $this->sendError('Unauthorized', ['error' => 'Invalid login credentials'], 401);
        }
    }

    /**
     * API resource to logout user
     * @param Request
     * @return Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $token = Auth::guard('api')->user()->token();
        $token->revoke();

        return $this->sendResponse([], 'Successfully logged out', 200);
    }
}
