
# 💼 Christyan Simbolon — Developer Portfolio

This is my official portfolio site - Christyan Simbolon, I'm a fullstack web developer with experience in Python/Django, JavaScript, Vue.js, React, Docker, and cloud-native deployments.

The site is designed to showcase professional projects, personal branding, and deployment practices using modern web technologies.

# 🧠 Overview

-Built with Vue.js and styled using Tailwind CSS
-Visual assets hosted on Cloudinary
-Blog data and dynamic content pulled from Firebase Firestore
-Deployed to a DigitalOcean Droplet using Docker and GitHub Actions
-Hosted at https://chrisimbolon.dev

# 🎨 Features

Responsive, mobile-first design

"Works" section highlighting major projects:

-RandomDots.id
-PlanetWander
-Django Taekwondo Coach
-FullstackPizza

Clean, typography-focused layout using Open Sans
Custom color palette and subtle animations for personal branding
Built with developer-first practices (linter, prebuild env injection, CI/CD)


# 🐳 Local Development
```
git clone https://github.com/chrisimbolon/portfolio.git
cd portfolio
```

Make sure to set environment variables at build time or in your CI/CD:

Firebase keys (VITE_API_KEY, VITE_PROJECT_ID, etc.)

Cloudinary config (VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_UPLOAD_PRESET)

Then build and run:

```
docker build \
  --build-arg VITE_API_KEY=your_key \
  --build-arg VITE_PROJECT_ID=your_project \
  --build-arg VITE_CLOUDINARY_CLOUD_NAME=your_cloud \
  --build-arg VITE_CLOUDINARY_UPLOAD_PRESET=your_preset \
  -t portfolio-app .

docker run -d --name portfolio-container --network caddy-net -p 3000:80 portfolio-app
```

App is available locally at : http://localhost:5173/

🔄 Deployment (CI/CD)

The project is deployed to a DigitalOcean Droplet using GitHub Actions:

SSH into server on push to main

Rebuilds Docker image with production environment variables

Replaces old container with the new one

Connected to caddy-net for reverse proxy via Caddy

See deploy.yml for details.

```
portfolio/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
├── Dockerfile
├── nginx.conf
├── deploy.yml
└── README.md
```
To run the project locally using Docker:


# portfolio-chris

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
