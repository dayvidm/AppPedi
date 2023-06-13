# Define a imagem base
FROM php:latest

# Define o diretório de trabalho
WORKDIR /var/www/html

# Instala as dependências do sistema operacional
RUN apt-get update \
    && apt-get install -y \
        libpq-dev \
        zip \
        unzip \
        git

# Instala as extensões do PHP necessárias
RUN docker-php-ext-install pdo pdo_pgsql pgsql

# Instala o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copia os arquivos do projeto para o diretório de trabalho
COPY . .

# Instala as dependências do Laravel
RUN composer install --optimize-autoloader --no-dev

# Executa os comandos do Laravel
RUN php artisan key:generate

# Define o comando padrão para executar o servidor web do Laravel
CMD php artisan serve --host=0.0.0.0

# Expõe a porta do servidor web
EXPOSE 8000
