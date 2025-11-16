FROM node:20-alpine
LABEL authors="warih"

WORKDIR /app

COPY . .

RUN npm install -g pnpm && pnpm install

RUN pnpm build

CMD ["pnpm", "start"]
