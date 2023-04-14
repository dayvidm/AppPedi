FROM php:8.1-fpm

RUN apt-get update \
    && apt-get install -y \
        libpq-dev \
        libzip-dev \
        unzip \
        nginx \
        supervisor \
    && docker-php-ext-install pdo pdo_pgsql zip \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && rm /etc/nginx/sites-enabled/default

COPY ./docker/nginx.conf /etc/nginx/sites-enabled/
COPY ./docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

WORKDIR /var/www/html

COPY . /var/www/html

RUN composer install --no-dev --prefer-dist \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
