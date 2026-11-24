# Build do front-end da Vera (vera-fe) servido por nginx.
# As variáveis VITE_* são lidas no build: mudou uma, rode `docker compose build web`.
FROM node:22-slim AS builder
ARG WEB_REF=main
ARG VITE_API_URL=http://localhost:3333
ARG VITE_GOOGLE_CLIENT_ID=
ARG VITE_FACEBOOK_APP_ID=
ARG VITE_TERMS_URL=
ARG VITE_PRIVACY_URL=
ENV HUSKY=0 \
    VITE_API_URL=$VITE_API_URL \
    VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID \
    VITE_FACEBOOK_APP_ID=$VITE_FACEBOOK_APP_ID \
    VITE_TERMS_URL=$VITE_TERMS_URL \
    VITE_PRIVACY_URL=$VITE_PRIVACY_URL
ADD https://github.com/revtriever-vera/vera-fe.git#${WEB_REF} /app
WORKDIR /app
RUN npm ci && npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
