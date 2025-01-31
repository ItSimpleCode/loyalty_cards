<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            "first_name" => "youssef",
            "last_name" => "elqayedy",
            "phone" => "0600851082",
            "location" => "casablanca",
            "gender" => "male",
            "email" => "elqayedycontact@gmail.com",
            "password" => "12345678"
        ]);

        User::factory(10)->create();
    }
}
