# Copilot Instructions for Creative Automation Co

## Build, Test, and Lint

### Development Server
```bash
npm run dev
```
Runs Vite dev server on `http://localhost:5173` with hot module reload.

### Production Build
```bash
npm run build
```
Builds the app and server (preset: Vercel). Output goes to `.vercel/output/`.

### Linting
```bash
npm run lint
```
Runs ESLint on all TypeScript/TSX files. No fixes needed; ESLint + Prettier handle formatting.

### Format Code
```bash
npm run format
```
Runs Prettier to auto-format code. Project uses 100-char print width, trailing commas, double quotes.

### Preview Built App
```bash
npm run preview
```
Runs the built output locally to test production behavior.

## Architecture Overview

### Stack
- **Framework:** TanStack Start (React 19 + Vite)
- **Routing:** File-based routing in `src/routes/` (not Next.js/Remix conventions)
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York style)
- **Forms & Validation:** React Hook Form + Zod
- **Data Fetching:** TanStack React Query
- **Server Functions:** `createServerFn` from `@tanstack/react-start` (POST only)
- **Icons:** Lucide React
- **Hosting:** Vercel (Nitro preset)

### Directory Structure
```
src/
├── routes/          # File-based routing; __root.tsx is the app shell
├── components/
│   ├── ui/         # shadcn/ui components (autoconfigured via components.json)
│   └── landing/    # Business landing page sections
├── lib/
│   ├── api/        # Server functions (createServerFn)
│   ├── utils.ts    # cn() utility (clsx + tailwind-merge)
│   ├── config.server.ts  # Server-side config
│   └── error-capture.ts  # Error handling
├── hooks/          # Custom React hooks
├── assets/         # Static files
└── styles.css      # Global styles, Tailwind theme variables
```

### Key Files
- **`src/routes/__root.tsx`:** App shell. Wraps all pages. Provides QueryClientProvider context. Do NOT remove `<Outlet />`.
- **`src/router.tsx`:** Router context setup.
- **`src/server.ts`:** SSR error wrapper (entry point redirected from TanStack Start).
- **`routeTree.gen.ts`:** Auto-generated route tree. Do NOT edit by hand.

## Conventions

### Routing
- **File-based:** `routes/about.tsx` → `/about`, `routes/users/$id.tsx` → `/users/:id`
- **Dynamic params:** Use bare `$` (e.g., `$id.tsx`), not `[id]` or `{id}`
- **Optional segments:** `{-$category}.tsx` → `/posts/:category?`
- **Catchall:** `$.tsx` → `/*` (read via `_splat` param, never `*`)
- **Layouts:** `_layout.tsx` files for nested layouts; use `<Outlet />` for children
- **Root layout:** Only `__root.tsx`; preserve `<Outlet />` or all routes break

### Server Functions
- Use `createServerFn({ method: "POST" })` for API endpoints
- Add `.inputValidator(zod schema)` for type-safe input
- Handler body runs server-only; imports there are tree-shaken from client
- Module-level code still ships to client; use `.server.ts` files for truly server-only helpers

### Components & Styling
- Import UI components from `@/components/ui/` (shadcn/ui)
- Use `cn()` utility to merge Tailwind classes: `cn("px-4 py-2", isActive && "bg-primary")`
- Tailwind is configured in `src/styles.css` with CSS variables for theming
- No separate styled-components or CSS-in-JS; Tailwind all the way

### Import Aliases
Use these aliases (configured in `tsconfig.json` + `components.json`):
- `@/components` → `src/components`
- `@/ui` → `src/components/ui`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

### Server vs Client Code
- Files ending in `.server.ts` run only on the server
- TanStack Start rule: **Never use Next.js `server-only` package**. Use `.server.ts` suffix or `@tanstack/react-start/server-only` instead
- ESLint enforces this; violations error out

### Error Handling
- Root route has `errorComponent` (500 errors) and `notFoundComponent` (404)
- Server errors logged to console in dev; graceful UI fallback in prod
- Error state can trigger router invalidation + reset via `router.invalidate()`

## Development Notes

- **TanStack Start:** This is not Next.js or Remix. Routes auto-scan `src/routes/`. No `app/`, `pages/`, or custom route config needed.
- **Vite Plugins:** Lovable's `@lovable.dev/vite-tanstack-config` includes most plugins; do NOT add duplicate bundler plugins or the app breaks
- **Environment:** ESM-only (type: "module" in package.json)
- **Type Safety:** Strict TypeScript. JSX is react-jsx.
- **Prettier + ESLint:** Integrated. Prettier handles formatting; ESLint with react-hooks plugin ensures hooks are used correctly

## MCP Servers

### Playwright
For browser automation, E2E testing, and visual validation:
```
https://github.com/modelcontextprotocol/servers/tree/main/src/playwright
```
Useful for:
- Writing and running E2E tests
- Visual regression testing
- Scraping/inspecting rendered HTML
- Debugging browser-related issues
