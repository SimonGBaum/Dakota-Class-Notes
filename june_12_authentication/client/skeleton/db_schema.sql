-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.users (
  id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name character varying NOT NULL,
  last_name character varying NOT NULL,
  username character varying NOT NULL,
  email character varying NOT NULL,
  CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE public.tasks (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title character varying NOT NULL,
  created_at timestamp without time zone NOT NULL DEFAULT now(),
  description text,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamp without time zone,
  user_id uuid NOT NULL,
  CONSTRAINT tasks_pkey PRIMARY KEY (id),
  CONSTRAINT tasks_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- RLS is enabled on both tables.
-- Auth trigger: on_auth_user_created fires after INSERT on auth.users
--   and auto-inserts into public.users using metadata fields:
--   first_name, last_name, username (from raw_user_meta_data) + email.

-- RLS Policies:
--   users  SELECT/UPDATE: id = auth.uid()
--   tasks  SELECT/UPDATE/DELETE: user_id = auth.uid()
--   tasks  INSERT: user_id = auth.uid()
