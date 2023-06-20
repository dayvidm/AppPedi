<?php

namespace App\Providers;

use App\Interfaces\Repositories\LojasRepositoryInterface;
use App\Interfaces\Services\LojasServiceInterface;
use App\Repositories\LojasRepository;
use App\Services\LojasService;
use Illuminate\Support\ServiceProvider;

final class ServiceRepositoryProvider extends ServiceProvider
{
    public function register(): void
    {
        //Repositories
        $this->app->bind(LojasRepositoryInterface::class,LojasRepository::class);
        //Services
        $this->app->bind(LojasServiceInterface::class,LojasService::class);
    }
}