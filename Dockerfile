FROM node:20-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat

RUN npm install -g pnpm
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

COPY . .
ENV NODE_ENV="production"

RUN npm install -g pnpm
RUN pnpm prisma generate no-engine --schema ./prisma/schema.prisma
RUN pnpm build

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]