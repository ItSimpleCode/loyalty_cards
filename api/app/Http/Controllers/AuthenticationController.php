<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\LogInRequest;
use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\LogInResource;

class AuthenticationController extends Controller
{
    public function signUp(SignUpRequest $request)
    {
        $remember = (bool) $request->remember;

        $UserModel = new User();
        $UserModelFillable = $UserModel->getFillable();

        $record = $request->only($UserModelFillable);

        try {
            DB::beginTransaction();
            $createUser = User::create($record);
            $recordResource = new LogInResource($createUser);
            $token = $createUser->createToken('signUp')->plainTextToken;
            DB::commit();
            $content = ['user' => $recordResource];
            return response($content, 201)
                ->cookie('auth_token', $token, 60, '/', null, true, true);
        } catch (\Exception $e) {
            DB::rollBack();
            return response([], 422);
        }
    }
    public function logIn(LogInRequest $request)
    {
        $remember = (bool) $request->remember;

        try {
            $where = ['email' => $request->email];
            $select = ['id', 'first_name', 'last_name', 'email', 'gender', 'password'];
            $readUser = User::where($where)->select($select)->firstOrFail();

            if (Hash::check($request->password, $readUser->password)) {
                $token = $readUser->createToken('logIn')->plainTextToken;
                $record = new LogInResource($readUser);
                $content = ['user' => $record];
                return response($content, 200)
                    ->cookie('auth_token', $token, 60, '/', null, true, true);
            } else {
                return response(['message' => 'password not match'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 404);
        }

    }
}
