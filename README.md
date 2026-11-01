# Next.js Starter

A minimal reusable starting point for web applications, built with the Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Requirements

- Node.js 20.9 or newer
- npm

## Setup

```powershell
npm ci
npm run dev
```

Open http://localhost:3000.

## Quality checks

```powershell
npm run lint
npm run build
```

## Project structure

```text
app/
  globals.css   Global styles and Tailwind import
  layout.tsx    Root layout and metadata
  page.tsx      Starter landing page
public/         Static assets
```

## Before production

- Replace the starter page and metadata with product-specific content.
- Validate server-side environment variables.
- Never expose secrets through `NEXT_PUBLIC_*` variables.
- Keep `.env.local` out of version control.
- Add authentication, authorization, and tests when the application requires them.
- Review security headers and deployment settings.

## Documentation

- https://nextjs.org/docs
- https://www.typescriptlang.org/docs/
- https://tailwindcss.com/docs
