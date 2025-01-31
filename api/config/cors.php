<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'allowed_headers' => ['*'],

    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Allow API and Sanctum CSRF
    'allowed_methods' => ['*'], // Allow all methods
    'allowed_origins' => ['http://localhost:3000'], // Allow React frontend
    // 'allowed_headers' => ['Content-Type', 'X-Requested-With', 'Authorization', 'X-XSRF-TOKEN'],
    'exposed_headers' => ['*'],
    'max_age' => 0,
    'supports_credentials' => true,


];
