FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

ENV NODE_ENV=production

WORKDIR /app
COPY . .

RUN pnpm install
RUN pnpm prisma generate
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]