# CI Photos — Interview Submission

A photo gallery app built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

```bash
cd photo-gallery
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

> **Note:** The Pexels API key is configured in the codebase per the interview instructions.

## Usage

1. Sign in with any username/password
2. Browse photos, click stars to like/unlike
3. Click logout icon (top right) to sign out

## Tech Stack

- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Pexels API
- Lucide React

## Testing

```bash
npm run test
```

Includes unit test for storage utilities and component test for PhotoCard.

## Production Improvements

**Critical**

- Real authentication (NextAuth.js or similar)
- Rate limiting on auth endpoints
- Security headers (CSP, HSTS)
- username and password validation

**Performance**

- Loading skeletons
- Image blur placeholders
- API response caching

**Features**

- Pagination / infinite scroll
- Search functionality
- Photo detail modal

**Quality**

- E2E tests with Playwright
- Expanded unit/component test coverage
- Error tracking (Sentry)
- CI/CD pipeline

---
