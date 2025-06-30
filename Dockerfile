FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

# Финальный образ
FROM node:22-alpine AS runner

WORKDIR /app

# Включаем pnpm в финальном образе
RUN corepack enable

# Копируем зависимости для production
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# Копируем собранное приложение
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Копируем Prisma схему и сгенерированный клиент
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Экспонируем порт
EXPOSE 3000

# Команда запуска
CMD ["pnpm", "start"]