# Django Day 1 -- Django ORM (Part 2) Cheat Sheet

------------------------------------------------------------------------

# Objects vs Tables

Instead of writing SQL by hand, Django lets us work with **Python
objects**.

``` text
Python Object  ← ORM →  PostgreSQL Row
```

ORM = **Object Relational Mapping**

The ORM translates Python code into SQL behind the scenes.

------------------------------------------------------------------------

# Django Projects vs Apps

A **project** is your entire application.

A **project can contain many apps**, where each app is responsible for
one feature.

Example:

``` text
pokedex_proj/
├── pokemon_app/
├── users_app/
└── inventory_app/
```

Create a new app:

``` bash
python manage.py startapp pokemon_app
```

------------------------------------------------------------------------

# Register the App

Add the app to `INSTALLED_APPS` inside `settings.py`.

``` python
INSTALLED_APPS = [
    ...
    "pokemon_app",
]
```

If Django doesn't know about the app...

-   no models
-   no migrations
-   no admin
-   no database tables

------------------------------------------------------------------------

# Models

A **Model** describes what a table should look like.

``` python
class Pokemon(models.Model):
    name = models.CharField(max_length=30)
```

Think of a model as:

> A Python class that describes a database table.

------------------------------------------------------------------------

# Common Field Types

  Django Field    SQL Equivalent
  --------------- ----------------
  CharField       VARCHAR
  TextField       TEXT
  IntegerField    INTEGER
  BooleanField    BOOLEAN
  FloatField      FLOAT
  DateField       DATE
  DateTimeField   TIMESTAMP

Documentation:

https://django.readthedocs.io/en/stable/ref/models/fields.html

------------------------------------------------------------------------

# Migrations

After changing a model:

``` bash
python manage.py makemigrations
```

Creates migration files describing database changes.

At this point...

-   ✅ Migration file exists
-   ❌ Database has NOT changed yet

Apply them:

``` bash
python manage.py migrate
```

Now Django executes the SQL against PostgreSQL.

------------------------------------------------------------------------

# Auto Primary Keys

You never created an ID field...

Django did.

``` python
id = models.BigAutoField(primary_key=True)
```

Every model automatically gets a primary key unless you create your own.

------------------------------------------------------------------------

# Django Shell

Open the interactive shell:

``` bash
python manage.py shell
```

The shell loads your Django project so you can work with your models.

------------------------------------------------------------------------

# Creating Objects

``` python
pikachu = Pokemon(
    pokemon_type="Electric",
    name="Pikachu",
    level=5
)
```

At this point...

-   ✅ Python object exists
-   ❌ Nothing is in the database yet

Save it:

``` python
pikachu.save()
```

Now Django generates an INSERT statement and stores it in PostgreSQL.

------------------------------------------------------------------------

# Object Lifecycle

``` text
Create Python Object
        │
        ▼
Modify Attributes
        │
        ▼
save()
        │
        ▼
Database Row
```

------------------------------------------------------------------------

# Django ORM Documentation

https://docs.djangoproject.com/en/dev/topics/db/queries/

------------------------------------------------------------------------

# Fixtures

Fixtures are **saved model data**.

Useful for:

-   Demo data
-   Seed data
-   Test data
-   Sharing sample databases

They are **not** full PostgreSQL backups.

Create:

``` bash
python manage.py dumpdata pokemon_app.Pokemon --indent 2 > pokemon_app/fixtures/pokemon_data.json
```

`--indent 2` makes the JSON easier to read.

Restore:

``` bash
python manage.py loaddata pokemon_data.json
```

------------------------------------------------------------------------

# Django Admin

The Django Admin is an automatically generated admin website.

Useful for:

-   Development
-   Internal company tools
-   Admin users

Not usually the interface regular users interact with.

Create an admin user:

``` bash
python manage.py createsuperuser
```

Login:

``` text
http://localhost:8000/admin
```

Register a model:

``` python
from pokemon_app.models import Pokemon

admin.site.register(Pokemon)
```

Improve display:

``` python
def __str__(self):
    return f"< Pokemon: {self.name} >"
```

------------------------------------------------------------------------

# Models Can Have Methods

``` python
def level_up(self):
    self.level += 1
    self.save()
```

``` python
def change_caught_status(self):
    self.is_caught = not self.is_caught
    self.save()
```

Models contain both:

-   Data (fields)
-   Behavior (methods)

------------------------------------------------------------------------

# Adding New Fields Later

``` python
is_caught = models.BooleanField(default=False)
```

Then:

``` bash
python manage.py makemigrations
python manage.py migrate
```

------------------------------------------------------------------------

# Typical Django Model Workflow

``` text
Edit models.py
      │
      ▼
python manage.py makemigrations
      │
      ▼
Review Migration
      │
      ▼
python manage.py migrate
      │
      ▼
Table Updated
      │
      ▼
Use ORM
      │
      ▼
(Optional)
Use Django Admin
```

------------------------------------------------------------------------

# Commands You'll Use Today

``` bash
python manage.py startapp pokemon_app
python manage.py makemigrations
python manage.py migrate
python manage.py shell
python manage.py dumpdata pokemon_app.Pokemon --indent 2 > pokemon_app/fixtures/pokemon_data.json
python manage.py loaddata pokemon_data.json
python manage.py createsuperuser
```

------------------------------------------------------------------------

# Key Takeaways

-   Models define database tables.
-   The ORM translates Python into SQL.
-   `makemigrations` creates migration files.
-   `migrate` updates the database.
-   Objects are not stored until `save()` is called.
-   Fixtures store sample model data---not full database backups.
-   Django Admin is an internal management interface.
-   Models can contain both fields and methods.
