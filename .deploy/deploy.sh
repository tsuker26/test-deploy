#!/bin/bash
set -e

# Папки
APP_DIR="/root/test-deploy"
NGINX_DIR="/var/www/test-deploy"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Переходим в папку с проектом
cd $APP_DIR

# Подтягиваем последние изменения
git fetch --all
git reset --hard origin/main


# Устанавливаем зависимости
npm install

# Собираем билд
npm run build

# Чистим старый билд
rm -rf $NGINX_DIR/*

# Копируем новый билд в папку nginx
cp -r $APP_DIR/dist/* $NGINX_DIR/

# Перезапускаем nginx
systemctl reload nginx

echo "✅ Деплой завершён"
