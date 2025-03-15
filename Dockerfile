# Use a lightweight Node.js image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Pass all Firebase env variables as build arguments
ARG VITE_API_KEY
ARG VITE_AUTH_DOMAIN
ARG VITE_PROJECT_ID
ARG VITE_STORAGE_BUCKET
ARG VITE_MESSAGING_SENDER_ID
ARG VITE_APP_ID
ARG VITE_MEASUREMENT_ID
ARG VITE_CLOUDINARY_CLOUD_NAME
ARG VITE_CLOUDINARY_UPLOAD_PRESET

# Create .env.production inside the container before build
RUN echo "VITE_API_KEY=${VITE_API_KEY}" >> .env.production && \
    echo "VITE_AUTH_DOMAIN=${VITE_AUTH_DOMAIN}" >> .env.production && \
    echo "VITE_PROJECT_ID=${VITE_PROJECT_ID}" >> .env.production && \
    echo "VITE_STORAGE_BUCKET=${VITE_STORAGE_BUCKET}" >> .env.production && \
    echo "VITE_MESSAGING_SENDER_ID=${VITE_MESSAGING_SENDER_ID}" >> .env.production && \
    echo "VITE_APP_ID=${VITE_APP_ID}" >> .env.production && \
    echo "VITE_MEASUREMENT_ID=${VITE_MEASUREMENT_ID}" >> .env.production && \
    echo "VITE_CLOUDINARY_CLOUD_NAME=${VITE_CLOUDINARY_CLOUD_NAME}" >> .env.production && \
    echo "VITE_CLOUDINARY_UPLOAD_PRESET=${VITE_CLOUDINARY_UPLOAD_PRESET}" >> .env.production

# Build the project (Vite will now detect .env.production)
RUN npm run build

# Use Nginx for serving the built files
FROM nginx:alpine

# Copy built files from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
