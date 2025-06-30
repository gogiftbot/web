FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

ENV DATABASE_URL=postgres://user:AF63+64XLB5H4J86x@212.233.90.225/production

WORKDIR /app
COPY . .

RUN pnpm install --frozen-lockfile
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]