# React + Vite on AWS Amplify (S3 + CloudFront)

A production-ready portfolio website built with React + Vite app deployed with **AWS Amplify Hosting**.  
Amplify builds the app, stores static assets in **S3**, and serves them globally via **CloudFront (HTTPS/SSL/TLS)**.

🌐 **Live Website:** [https://neekiaskari.com](https://neekiaskari.com)

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, MUI, Emotion
- **AWS (Hosting):** Amplify Hosting → S3 (origin) + CloudFront (CDN, HTTPS)
- **AWS (Optional Backend):** Cognito (Auth), AppSync (GraphQL API), DynamoDB (DB), CloudWatch (logs)
- **Tooling:** ESLint, TypeScript, @aws-amplify/ui-react, aws-amplify

## Quick Start

```bash
# 1) Install
npm install

# 2) Run locally
npm run dev
# -> http://localhost:5173 (Vite default)

# 3) Build for production
npm run build
# Outputs to: dist/

# 4) Preview the production build locally
npm run preview
```

# Accessibility & Performance

Vite build outputs modern, optimized bundles in dist/.

CloudFront caches globally for low latency; S3 is the origin.

Use Lighthouse (or npm run preview) to validate performance before deploys.
