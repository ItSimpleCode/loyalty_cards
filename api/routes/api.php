<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;


Route::post('/authentication/signup', [AuthenticationController::class, 'signUp']);
Route::post('/authentication/login', [AuthenticationController::class, 'logIn'])
    ->middleware('auth:sanctum');
