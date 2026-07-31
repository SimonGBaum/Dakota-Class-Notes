# Django Model Relationships

## Terminal Learning Objective (TLO)

Given a running Django project connected to a PostgreSQL container, **model and expose relationships between Django models** — selecting the correct relationship field for a given requirement, migrating it, managing the related records through the Django admin and ORM, and serializing the relationship for an API response.

**Standard:** all migrations apply cleanly, the test suite passes, and a serializer returns correctly nested related data.

---

## Part I — Relationship Types (`relationship_proj`)

Domain: an airline. `Passenger` is the hub; `Passport`, `LuggageBag`, and `Flight` each attach to it with a different relationship type.

### ELO 1.1 — Differentiate the three relationship fields

- Identify when to use `OneToOneField`, `ForeignKey`, and `ManyToManyField`
- State which side of a relationship the field belongs on, and why a `ForeignKey` cannot live on the "one" side
- Recognize that `ManyToManyField` may be declared on either model

### ELO 1.2 — Explain relationships at the SQL level

- Read `sqlmigrate` output and locate the foreign key Django generated
- Explain that a one-to-one **is** a foreign key plus a `UNIQUE` constraint — the single difference from many-to-one
- Explain that a many-to-many produces a **third table** of two foreign keys, and identify it in `psql`

### ELO 1.3 — Configure relationship behavior

- Apply `on_delete=models.CASCADE` and predict what is destroyed when a parent row is deleted
- Explain why `on_delete` is required on `ForeignKey`/`OneToOneField` and unavailable on `ManyToManyField`
- Use `related_name` to define the reverse accessor, and explain that the reverse side is created by the *other* model
- Reference a cross-app model with the `"app_label.ModelName"` string form, and explain what it avoids

### ELO 1.4 — Traverse relationships in the ORM

- Distinguish a reverse one-to-one (returns the **object**) from a reverse `ForeignKey`/`ManyToManyField` (returns a **manager**, requiring `.all()`)
- Query across a relationship with the `__` lookup separator
- Interpret `RelatedObjectDoesNotExist` and `IntegrityError` as constraint enforcement

### ELO 1.5 — Manage related records in the Django admin

- Register related models and match the admin widget to the relationship: `StackedInline` (1:1), `TabularInline` (M:1), `filter_horizontal` (M:M)
- Create and edit related records across multiple tables from a single admin page

### ELO 1.6 — Serialize related data

- Nest a `ModelSerializer` for a single related object
- Add `many=True` for a collection of related objects
- Use `SerializerMethodField` to shape related output rather than return the full record
- Match a serializer attribute name to the model field or `related_name` it reads from

---

## Part II — Applying a Relationship (`pokedex_proj`)

Adds a `move_app` and connects it to the existing `Pokemon` model.

### ELO 2.1 — Scaffold a second app under single responsibility

- Create an app with `startapp` and register it in `INSTALLED_APPS`
- Explain why moves belong in their own app rather than in `pokemon_app`
- Predict the failure mode of an unregistered app (`No changes detected`)

### ELO 2.2 — Author and evaluate a validator

- Write a field validator that raises `ValidationError`
- **Read a regex component by component** — anchors, character classes, quantifiers, non-capturing groups
- Critique a working regex for unintended behavior (case, length, word count, permitted punctuation) and replace it with a corrected pattern
- Explain why `\A`/`\Z` are preferred over `^`/`$`

### ELO 2.3 — Validate at every layer

- Explain that `full_clean()` runs validators and `save()` does not
- Demonstrate that a `ModelSerializer` **inherits** model field validators
- Locate the offending field using `e.message_dict` and `serializer.errors`
- Explain that `loaddata` bypasses validation entirely

### ELO 2.4 — Test model constraints

- Assert a failure with `assertRaises(ValidationError)`
- Explain why a passing test may pass for the wrong reason, and confirm the actual cause
- Run a single app's tests and the full suite

### ELO 2.5 — Implement a many-to-many association

- Add `ManyToManyField` to an existing model and migrate it
- Identify the generated join table `pokemon_app_pokemon_moves` and its `UNIQUE` pair
- Explain that the relationship adds **no column** to either original table

### ELO 2.6 — Manage a many-to-many as a set

- Use `add`, `remove`, `set`, and `clear`, by primary key or by instance
- Explain that these are idempotent and require no subsequent `.save()`
- Explain that `remove()` deletes a link row, never a record

### ELO 2.7 — Serialize across the relationship

- Render related data with both `SerializerMethodField` and a nested `ModelSerializer`, and justify the choice
- Serialize the reverse direction using `related_name`
- Explain why at least one side must return flat data, and identify the `RecursionError` caused by mutual nesting

### ELO 2.8 — Persist and reload data with fixtures

- Dump a model with `dumpdata <app_label>.<ModelName>`
- Explain that a many-to-many dumps as a list of primary keys
- Load fixtures in dependency order and interpret the `IntegrityError` produced by the wrong order

---

## Checks on Learning

Students should be able to answer, unaided:

1. What is the only SQL difference between a one-to-one and a many-to-one?
2. Which model gets the `ForeignKey`, and why can't it go on the other one?
3. Why does `ManyToManyField` take no `on_delete`?
4. Why does `passenger.passport` need no `.all()` but `passenger.luggage_bags` does?
5. You added a model but `makemigrations` says "No changes detected." Why?
6. `full_clean()` vs `save()` — which validates?
7. After `pokemon.moves.add(move)`, why is `pokemon.save()` unnecessary?
8. Your fixture load fails on a foreign key constraint. What order did you use?

## Command Reference

```bash
python manage.py startapp <app_name>
python manage.py makemigrations
python manage.py migrate
python manage.py sqlmigrate <app_label> <migration_number>
python manage.py test <app_name>
python manage.py shell
python manage.py createsuperuser
python manage.py dumpdata <app_label>.<Model> --indent 2 > <app>/fixtures/<name>.json
python manage.py loaddata <name>.json
```

## Prior Knowledge Assumed

- Django project vs. app; `INSTALLED_APPS`
- Models, fields, `makemigrations` / `migrate`
- Validators and `full_clean()`
- `ModelSerializer` and `SerializerMethodField`
- Django admin registration, `createsuperuser`, `__str__`
- Fixtures via `dumpdata` / `loaddata`
- Running `manage.py` commands inside the Django container
