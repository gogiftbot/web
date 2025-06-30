# Builder stage
FROM node:20-alpine AS builder
WORKDIR /app

# Установка pnpm и системных зависимостей
RUN npm install -g pnpm
RUN apk add --no-cache openssl

# Копируем зависимости
COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma

# Устанавливаем зависимости и генерируем Prisma клиент
RUN pnpm install --frozen-lockfile
RUN pnpm prisma generate

# Копируем остальное приложение и собираем
COPY . .
RUN pnpm build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

# Копируем только необходимое из builder
COPY --from=builder /app/package.json .
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules

# Запуск приложения с миграциями
CMD [ "sh", "-c", "pnpm start" ]