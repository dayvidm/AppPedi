<?php

namespace App\Http\Controllers;

use App\Interfaces\Services\LojasServiceInterface;
use App\Models\Lojas;
use Illuminate\Http\Request;

class LojasController extends Controller
{
    protected $service;
    protected $model;
    public function __construct(
        LojasServiceInterface $service
    )
    {
        $this->model = Lojas::class;
        $this->service = $service;
    }

    public function index(Request $request)
    {
        $nomeLoja = $request->input('nome_loja');
        $response = $this->service->getLojas($nomeLoja);
        return $this->sendResponse($response);
    }

}
