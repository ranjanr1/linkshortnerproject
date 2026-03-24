# UI — shadcn/ui

## Rules

- **shadcn/ui is the only component library.** Never create custom UI components from scratch.
- Always reach for an existing shadcn component before writing any HTML primitives for UI.
- This project uses the **base-nova** theme with **Tailwind v4**. Do not add other CSS frameworks, component libraries, or icon packs.

## Adding Components

Use the shadcn CLI to add components — do not hand-write them:

```bash
npx shadcn@latest add <component-name>
```

Added components land in `components/ui/` and must not be modified unless absolutely necessary.

## Usage

Import directly from the `components/ui/` path:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
```

## What counts as a "custom component"

Composing shadcn primitives together into a layout-level component (e.g. a `<DashboardHeader>` that uses `<Button>` and `<Card>` internally) is fine. Building a brand-new interactive element (dropdown, modal, tooltip, input) without using a shadcn primitive is **not allowed**.
