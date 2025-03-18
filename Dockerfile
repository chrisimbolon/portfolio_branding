# Stage 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Pass Firebase & Cloudinary env variables at build time
ARG VITE_API_KEY
ARG VITE_AUTH_DOMAIN
ARG VITE_PROJECT_ID
ARG VITE_STORAGE_BUCKET
ARG VITE_MESSAGING_SENDER_ID
ARG VITE_APP_ID
ARG VITE_MEASUREMENT_ID
ARG VITE_CLOUDINARY_CLOUD_NAME
ARG VITE_CLOUDINARY_UPLOAD_PRESET

# Create .env.production
RUN echo "VITE_API_KEY=${VITE_API_KEY}" >> .env.production && \
    echo "VITE_AUTH_DOMAIN=${VITE_AUTH_DOMAIN}" >> .env.production && \
    echo "VITE_PROJECT_ID=${VITE_PROJECT_ID}" >> .env.production && \
    echo "VITE_STORAGE_BUCKET=${VITE_STORAGE_BUCKET}" >> .env.production && \
    echo "VITE_MESSAGING_SENDER_ID=${VITE_MESSAGING_SENDER_ID}" >> .env.production && \
    echo "VITE_APP_ID=${VITE_APP_ID}" >> .env.production && \
    echo "VITE_MEASUREMENT_ID=${VITE_MEASUREMENT_ID}" >> .env.production && \
    echo "VITE_CLOUDINARY_CLOUD_NAME=${VITE_CLOUDINARY_CLOUD_NAME}" >> .env.production && \
    echo "VITE_CLOUDINARY_UPLOAD_PRESET=${VITE_CLOUDINARY_UPLOAD_PRESET}" >> .env.production

# Build the project
RUN npm run build

# Stage 2: Serve the static files with NGINX
FROM nginx:alpine

# Remove default NGINX config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built React app to NGINX's serving directory
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
