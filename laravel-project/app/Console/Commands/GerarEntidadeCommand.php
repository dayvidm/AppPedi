<?php

namespace App\Console\Commands;

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class GerarEntidadeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'gerar:entidade {nome}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gerar Classes automaticamente';

    /**
     *  Nome das Classes
     *
     * @var string
     */
    protected $name;

    public function __construct(/**
        * The filesystem instance.
        */
       protected Filesystem $files)
       {
           parent::__construct();
       }
    /**
     * Execute the console command.
     */
    /**
     * Execute the console command.
     *
     * @throws FileNotFoundException
     */
    public function handle(): int
    {
        $this->name = $this->argument('nome');

        //Dentro da pasta de app/
        $controllerNamespace          = 'Http\Controllers';
        $modelNamespace               = 'Models';
        $repositoryNamespace          = 'Repositories';
        $serviceNamespace             = 'Services';
        $repositoryInterfaceNamespace = 'Interfaces\Repositories';
        $serviceInterfaceNamespace    = 'Interfaces\Services';

        $this->criaEstrutura($controllerNamespace, 'controller', 'Controller');
        $this->criaEstrutura($modelNamespace, 'model');
        $this->criaEstrutura($repositoryInterfaceNamespace, 'repository-interface', 'RepositoryInterface');
        $this->criaEstrutura($repositoryNamespace, 'repository', 'Repository');
        $this->criaEstrutura($serviceNamespace, 'service', 'Service');
        $this->criaEstrutura($serviceInterfaceNamespace, 'service-interface', 'ServiceInterface');

        echo "\nEstruturas criadas com sucesso!!\n";

        return 0;
    }

    /**
     * @throws FileNotFoundException
     */
    public function criaEstrutura($namespace, $stubName, $append = ''): int
    {
        $class = "App\\".$namespace . "\\" . $this->name.$append;
        if (!class_exists($class)) {
            $this->files->put(
                'app/' . str_replace('\\', '/', $namespace . '\\' . $this->name . $append . ".php"),
                $this->compileMigrationStub($stubName, 'App\\' . $namespace)
            );
            echo "\n" . $this->name . $append . " criado com sucesso!";
        }

        return 0;
    }

    /**
     * Compile the migration stub.
     *
     * @param $stubName
     * @param $namespace
     * @throws FileNotFoundException
     */
    private function compileMigrationStub($stubName, string $namespace): string
    {
        $stub = $this->files->get(__DIR__ . '/../stubs/' . $stubName . '.stub');

        $this->replaceName($stub)
             ->replaceClassName($stub)
             ->replaceNamespace($stub, $namespace);

        return $stub;
    }

    private function replaceName(&$stub): static
    {
        $stub = str_replace('{{name}}', Str::camel($this->name), (string) $stub);

        return $this;
    }

    private function replaceClassName(&$stub): static
    {
        $stub = str_replace('{{class}}', ucwords(Str::camel($this->name)), (string) $stub);

        return $this;
    }

    private function replaceNamespace(&$stub, string $namespace): static
    {
        $stub = str_replace('{{namespace}}', $namespace, (string) $stub);

        return $this;
    }
}
