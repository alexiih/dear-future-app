### Production and development ready Dockerfile

FROM node:20-alpine AS base
ENV CI=true
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

### Install production dependencies
FROM base AS deps
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

### Install all dependencies for building
FROM base AS dev-deps
ENV NODE_ENV=development
COPY package.json package-lock.json ./
RUN npm install

### Build the Next.js application
FROM base AS builder
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

### Production runtime image
FROM node:20-alpine AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
