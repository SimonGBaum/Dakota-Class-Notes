-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.users (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  first_name character varying NOT NULL,
  last_name character varying NOT NULL,
  username character varying NOT NULL,
  email character varying NOT NULL,
  password character varying NOT NULL,
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
  CONSTRAINT tasks_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id)
);