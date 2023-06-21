<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Lojas;

class LojasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            Lojas::create([
                'user_id' => $i,
                'endereco' => 'Rua ' . chr(64 + $i) . ', ' . $i . $i . $i,
                'nome_loja' => 'Loja ' . chr(64 + $i),
                'aberta' => $i % 2 == 0 ? true : false,
            ]);
        }
    }
}
