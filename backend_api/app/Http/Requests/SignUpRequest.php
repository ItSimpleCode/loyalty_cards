<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "first_name" => ["required", "string", "max:255"],
            "last_name" => ["required", "string", "max:255"],
            "gender" => ["required", "in:male,female"],
            "location" => ["required", "string"],

            "email" => ["required", "email", "unique:users,email"],
            "phone" => ["required", "string", "regex:/^\+?[0-9]{10,15}$/", "unique:users,phone"],

            "password" => ["required", "string", "min:8", "confirmed"],
            "remember_me" => ["nullable", "boolean"],
        ];
    }
}
