CREATE TABLE public.donations (
  id                       uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                  uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount                   integer     NOT NULL,
  stripe_payment_intent_id text        UNIQUE NOT NULL,
  status                   text        NOT NULL CHECK (status IN ('succeeded', 'failed')),
  created_at               timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Users can read their own donation rows only
CREATE POLICY "users_select_own_donations"
  ON public.donations
  FOR SELECT
  USING (user_id = auth.uid());

-- No INSERT/UPDATE policy for authenticated role intentionally:
-- all writes come from stripe-webhook edge function using the service role key.
