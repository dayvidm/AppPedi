<?php

namespace App\Repositories;

use App\Models\Lojas;
use App\Interfaces\Repositories\LojasRepositoryInterface;

class LojasRepository implements LojasRepositoryInterface
{
    private $model;
    public function __construct(Lojas $model)
    {
        $this->model = $model;
    }
    public function getLojas($nomeLoja = null)
    {
        $query = Lojas::query();

        if ($nomeLoja) {
            $query->where('nome_loja', $nomeLoja);
        }

        return $query->get()->toArray();
    }

}
