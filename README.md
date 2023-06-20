# AppPedi
Tecnologias utilizadas
Laravel 10.0
PostgreSQL 13
React 18
Docker
Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

Docker
Como rodar a aplicação
Clone o repositório:

bash
Copy code
git clone https://github.com/seu-usuario/nome-do-projeto.git
Acesse a pasta do projeto:

bash
Copy code
cd nome-do-projeto
Crie o arquivo .env a partir do .env.example:

bash
Copy code
cp .env.example .env
Execute o comando abaixo para iniciar os containers do Docker:

bash
Copy code
docker-compose up
A aplicação estará disponível em:

arduino
Copy code
http://localhost:3000 (Frontend)
http://localhost:8000 (Backend)
Como contribuir
Faça um fork do projeto
Crie uma branch para sua feature (git checkout -b feature/sua-feature)
Faça commit de suas alterações (git commit -am 'Adiciona nova feature')
Push para o branch (git push origin feature/sua-feature)
Crie um novo Pull Request

Adicionais : 
Para Criar uma estrutura de Entidade utilize o comando :
docker exec -it laravel-project-app-1 php artisan gerar:entidade Lojas
Após isso vá em: api/app/Providers/RepositoryServiceProvider.php  e faça o bind como já existe lá.

Equipe
Dayvid Mesquita da Silva
Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
