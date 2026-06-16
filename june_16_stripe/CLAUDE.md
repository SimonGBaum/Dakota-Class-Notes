# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A task management SPA with a completed **Stripe one-time donation feature**. Two sub-projects live side by side:

| Directory | Role |
|-----------|------|
| `client/` | React 19 + Vite frontend |
| `supabase/` | Supabase CLI project — edge functions (Deno/TypeScript) + DB schema |

See each sub-directory's own `CLAUDE.md` for detailed guidance on that layer.

## Commands

### React client (`client/`)
```bash
npm run dev       # dev server with HMR
npm run build     # production build → dist/
npm run lint      # ESLint
```

### Supabase (`supabase/`)
```bash
npx supabase status                                              # check link to remote project
npx supabase functions serve <name>                             # serve a single edge function locally
npx supabase functions deploy <name> --project-ref ampkukwdwqqghnfntvoi  # deploy to remote
npx supabase db execute --file <sql-file>                       # run SQL against the remote project
```

## Architecture

### Auth
Handled by **Supabase Auth** (`@supabase/supabase-js`). `AppContext` subscribes to `supabase.auth.onAuthStateChange` to keep `currentUser` in sync. `userService.js` wraps `supabase.auth.signUp` / `signInWithPassword`. No custom server-side auth routes.

### Client data flow
```
Component
  → useApp() hook (AppContext)
    → service function (src/services/)
      → supabase-js client
        → Supabase REST API / Edge Function
```
All DB rows come back snake_case and are converted to camelCase by `src/services/mappers.js` before entering React state. Always use `mappers.js` when adding new queries.

### Edge Functions
Written in Deno TypeScript (`supabase/supabase/functions/<name>/index.ts`). Each function has its own `deno.json` import map and is registered in `supabase/supabase/config.toml`. The donation functions differ from older demo functions in two ways:
- `process-donation` uses `verify_jwt = true` (authenticated endpoint)
- `stripe-webhook` uses `verify_jwt = false` (Stripe has no Supabase JWT)

### Stripe donation flow (complete)

```
User clicks floating coffee button (Layout.jsx, bottom-right)
  → /donate page (DonatePage.jsx)
    → picks amount + fills Stripe CardElement
      → supabase.functions.invoke('process-donation', { amount (cents), user_id })
          → Edge Function creates Stripe PaymentIntent, returns { client_secret }
        → stripe.confirmCardPayment(client_secret, { card: CardElement })
            → Stripe processes payment
              → stripe-webhook receives payment_intent.succeeded / payment_intent.payment_failed
                  → inserts row into public.donations (service role, bypasses RLS)
```

**Key implementation details:**
- `loadStripe()` is called once at module scope in `DonatePage.jsx` — never inside a component
- `<Elements stripe={stripePromise}>` wraps the inner `DonationForm` component — `useStripe()`/`useElements()` must be called inside `<Elements>`
- Payment confirmation uses `stripe.confirmCardPayment` (Stripe.js), NOT a second edge function call
- The webhook receives two event formats from Stripe and selects the correct signing secret based on the `object` field in the raw body:
  - `"object": "event"` → v1 snapshot event → `STRIPE_WEBHOOK_SECRET_SNAPSHOT`
  - `"object": "v2.core.event"` → v2 thin event → `STRIPE_WEBHOOK_SECRET_THIN`
- Webhook inserts are idempotent: duplicate `stripe_payment_intent_id` (Postgres error code `23505`) is silently ignored

### Database tables

| Table | Purpose |
|-------|---------|
| `public.users` | Auth mirror — auto-created by trigger on `auth.users` insert |
| `public.tasks` | User tasks with completion tracking |
| `public.donations` | Donation records written by `stripe-webhook` (service role only) |

`donations` RLS: users can SELECT their own rows (`user_id = auth.uid()`). No user INSERT policy — all writes come from the webhook via service role.

### Environment variables

**`client/.env`**
```
VITE_SUPABASE_URL=
VITE_SUPABASE_KEY=
VITE_STRIPE_PUBLIC_KEY=    ← must have VITE_ prefix for Vite to expose it
```

**`supabase/.env`** — loaded by the CLI at deploy time; never commit secrets here.
```
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET_SNAPSHOT=
STRIPE_WEBHOOK_SECRET_THIN=
```
`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are auto-injected by the Supabase runtime — do not add them to `.env`.

### Stripe Dashboard registration
Webhook endpoint: `https://ampkukwdwqqghnfntvoi.supabase.co/functions/v1/stripe-webhook`
Events: `payment_intent.succeeded`, `payment_intent.payment_failed`

## Key Constraints

- `STRIPE_SECRET_KEY` must never appear in `client/` files or `client/.env` — only in `supabase/.env`.
- `supabase-js` client (`supabase.functions.invoke`) is used to call edge functions from the frontend — it auto-attaches the session Bearer token, satisfying `verify_jwt = true` on `process-donation`.
- `dailyCount` in `AppContext` is derived client-side from `tasks` state — it is not persisted.
- `ProtectedRoute` redirects to `/` if `currentUser` is null. All routes except `/` and `*` are protected.
