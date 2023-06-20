<?php

namespace App\Repositories;

use App\Models\Lojas;
use App\Interfaces\Repositories\LojasRepositoryInterface;

class LojasRepository extends BaseRepository implements LojasRepositoryInterface
{

    public function __construct(Lojas $model)
    {
        parent::__construct($model);
    }

}
