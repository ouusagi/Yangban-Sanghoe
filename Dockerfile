FROM node:22
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY src/ ./src/
COPY tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts ./
COPY index.html ./
COPY public ./public/
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx-frontend.conf /etc/nginx/conf.d/default.conf