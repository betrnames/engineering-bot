# Engineering Bot

A showcase for the **engineering.bot** domain — exploring what an AI-native engineering assistant looks like when built with the latest in AI and robotics infrastructure.

## Tech stack

| Layer | Tech |
|-------|------|
| Frontend | TypeScript, Vite |
| Backend | Cloudflare Pages Functions |
| Database | Cloudflare D1 (SQLite at the edge) |
| Hosting | Cloudflare Pages |

## Architecture

Built on Cloudflare's edge stack — D1 for data, Pages Functions for server logic, all deployed globally with zero cold starts. The frontend is a single-page TypeScript app bundled with Vite.

## Run locally

```bash
npm install
npx wrangler pages dev
```
