<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use LojasTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->call(LojasTableSeeder::class);
    }
}
