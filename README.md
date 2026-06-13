# Tuturuuu Starter

A Next.js starter for Tuturuuu projects. It comes wired with the shared
Tuturuuu UI package, SDK, TypeScript config, PostCSS config, global styles, and
CI checks.

## Stack

- Next.js 16 with the App Router
- React 19
- Bun
- `@tuturuuu/ui`
- `tuturuuu` SDK and CLI binaries
- `@tuturuuu/typescript-config/nextjs.json`
- ESLint 10, TypeScript 6, and Prettier

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tuturuuu UI

The app imports the shared stylesheet in `app/layout.tsx`:

```ts
import "@tuturuuu/ui/globals.css";
```

PostCSS re-exports the shared UI config from `postcss.config.mjs`:

```ts
export { default } from "@tuturuuu/ui/postcss.config";
```

Next transpiles `@tuturuuu/ui` and the public Tuturuuu packages it imports from
source via `next.config.ts`.

## Tuturuuu SDK

The `tuturuuu` package is installed as a runtime dependency and exposes these
local binaries:

```bash
bunx ttr --version --no-update-check
bunx tuturuuu --version --no-update-check
bunx tutur3u --version --no-update-check
```

## Scripts

```bash
bun run dev
bun run build
bun run lint
bun run type-check
bun run format
bun run format:check
```

## CI

GitHub Actions runs on pull requests and pushes to `main`:

```bash
bun install --frozen-lockfile
bun run format:check
bun run lint
bun run type-check
bun run build
```

## Deployment

Deploy with any Next.js-compatible host. Vercel works out of the box for this
starter.
