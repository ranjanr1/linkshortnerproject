<!-- BEGIN:nextjs-agent-rules -->
# Agent Instructions — Link Shortener Project

## ⚠️ This is NOT the Next.js you know

This project runs **Next.js 16.2.0** with breaking changes vs. prior releases. APIs, conventions, and file structure may all differ from your training data. Read `node_modules/next/dist/docs/` for any API you are unsure about. Heed all deprecation notices.

---

## Required Reading

Before writing any code for this project, read all files in the `/docs` directory. Each file is authoritative for its domain:
ALWAYS refer to the relevant .md file before generating any code.

| File | Domain |
|------|--------|
| `docs/auth.md` | Authentication — Clerk rules, protected routes, modal buttons |
| `docs/ui.md` | UI components — shadcn/ui only, no custom components |


---

## Core Rules (summary)

1. **App Router only** — no `pages/` directory, no legacy patterns.
2. **Server Components by default** — only add `"use client"` when necessary.
3. **Drizzle + Neon** — the only database layer; no raw SQL strings.
4. **Clerk v7** — use the `Show` component, not deprecated `SignedIn`/`SignedOut`.
5. **shadcn/ui (base-nova) + Tailwind v4** — no additional CSS frameworks or icon libraries.
6. **Strict TypeScript** — no `any`, no `@ts-ignore`.
7. **Never invent stack choices** — use only the tools listed in `docs/tech-stack.md`.
<!-- END:nextjs-agent-rules -->
