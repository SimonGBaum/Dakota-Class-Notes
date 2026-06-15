CREATE TABLE "users"(
    "id" UUID NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_nam" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");

CREATE TABLE "tasks"(
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "description" TEXT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT FALSE,
    "completed_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL,
    "user_id" UUID NOT NULL
);
ALTER TABLE
    "tasks" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "tasks"."created_at" IS 'on creation now';
COMMENT
ON COLUMN
    "tasks"."completed_at" IS 'when tasks are marked as completed=true';
COMMENT
ON COLUMN
    "tasks"."user_id" IS 'Many to one relationship between tasks and users';
ALTER TABLE
    "tasks" ADD CONSTRAINT "tasks_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");