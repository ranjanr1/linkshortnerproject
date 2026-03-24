# Auth — Clerk

## Rules

- **Clerk is the only auth method.** Never add other auth libraries, custom JWT logic, or next-auth.
- Use Clerk v7 APIs only. Use the `Show` component (`when="signed-in"` / `when="signed-out"`); never use the deprecated `SignedIn` / `SignedOut` components.
- Sign In and Sign Up must always open as a **modal** — pass `mode="modal"` to `<SignInButton>` and `<SignUpButton>`.

## Protected Routes

- `/dashboard` and any route nested under it is **protected**.
- Use Clerk middleware (`clerkMiddleware` from `@clerk/nextjs/server`) in `middleware.ts` at the project root to enforce this.
- Redirect unauthenticated users to the sign-in modal (let Clerk handle the redirect URL automatically via `clerkMiddleware`).

## Homepage Redirect

- If a **signed-in** user visits `/`, redirect them to `/dashboard`.
- Implement this in `middleware.ts` using `auth().userId` to detect the session.

## middleware.ts pattern

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Redirect signed-in users away from homepage
  if (userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Protect dashboard routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
```

## Modal Buttons

Always pass `mode="modal"` when rendering auth buttons:

```tsx
<SignInButton mode="modal">
  <Button variant="outline" size="sm">Sign In</Button>
</SignInButton>
<SignUpButton mode="modal">
  <Button size="sm">Sign Up</Button>
</SignUpButton>
```
