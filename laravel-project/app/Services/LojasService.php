<?php

namespace App\Services;

use App\Interfaces\Repositories\LojasRepositoryInterface;
use App\Interfaces\Services\LojasServiceInterface;

class LojasService implements LojasServiceInterface
{
    /**
     * @LojasRepositoryInterface $lojasRepository
     */
    protected LojasRepositoryInterface $repository;

    public function __construct(LojasRepositoryInterface $interface)
    {
        $this->repository = $interface;
    }

    public function getLojas($nomeLoja)
    {
        $nomeLoja = false;
        return $this->repository->getLojas($nomeLoja);
    }
}
