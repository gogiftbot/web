FROM node:20.10-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN npm install -g pnpm
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY prisma ./prisma
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

FROM base AS dev

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Uncomment this if you're using prisma, generates prisma files for linting
# RUN npx prisma generate

#Enables Hot Reloading Check https://github.com/vercel/next.js/issues/36774 for more information
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /root/.pnpm /root/.pnpm
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Uncomment this if you're using prisma, generates prisma files for linting
# RUN npx prisma generate

RUN pnpm prisma generate
RUN pnpm build

# Production image, copy all the files and run next

FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy required Prisma files
COPY --from=builder /app/prisma ./prisma

# Automatically leverage output traces
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"