# ---- Этап 1: Сборка приложения ----
# Используем Node.js 20-alpine (более новая версия)
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы с зависимостями
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код проекта
COPY . .

# Собираем приложение для production
RUN npm run build

# ---- Этап 2: Сервер для раздачи статики ----
FROM nginx:alpine

# Копируем собранные файлы из первого этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфиг Nginx (если есть)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]