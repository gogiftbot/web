FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate


ENV NODE_ENV=production

WORKDIR /app
COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]