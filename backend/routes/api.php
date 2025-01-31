<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticateController;

Route::middleware(['web'])->group(function () {
    Route::post('/csrf-test', function (Request $request) {
        return response()->json(['message' => 'CSRF token match.']);
    });
    Route::post('/authentication/signup', [AuthenticateController::class, 'signUp']);
    Route::post('/authentication/login', [AuthenticateController::class, 'logIn']);
});
