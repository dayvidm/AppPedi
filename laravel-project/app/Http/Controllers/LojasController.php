<?php

namespace App\Http\Controllers;

use App\Services\LojasService;
use App\Models\Lojas;

class LojasController extends Controller
{

    public function __construct(
        LojasService $service
    )
    {
        $this->model = Lojas::class;
        $this->service = $service;
    }

}
