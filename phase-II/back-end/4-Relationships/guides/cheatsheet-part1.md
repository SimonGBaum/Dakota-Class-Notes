# Django Day 1 - Setup Cheat Sheet

This guide walks you through setting up a Django project using PostgreSQL in Docker.

---

# Final Project Structure

```text
.
├── db
│   ├── Dockerfile
│   └── run_db.sh
├── pokedex_proj
│   ├── db.sqlite3
│   ├── Dockerfile
│   ├── manage.py
│   ├── pokedex_proj
│   │   ├── asgi.py
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── requirements.txt
│   └── run_server.sh
└── README.md
```

---

# 1. Create the Django Project

```bash
django-admin startproject pokedex_proj
```

Move into the project folder:

```bash
cd pokedex_proj
```

---

# 2. Create a Virtual Environment

Deactivate the Current Virtual Environment
If a virtual environment is currently active:
```bash
deactivate
```

Create:

```bash
python -m venv .venv
```

Activate:

```bash
source .venv/bin/activate
```

or

```bash
. .venv/bin/activate
```

---

#####  Add to `.gitignore`

```
.venv/
```

---

# 3. Install Django

```bash
pip install django
```

---

# 4. Install Psycopg 3

Psycopg is the PostgreSQL database adapter that allows Django to communicate with PostgreSQL.

```bash
pip install "psycopg[binary]"
```

---

# 5. Save the Project Dependencies

Create a `requirements.txt` file.

```bash
pip freeze > requirements.txt
```

To reinstall later:

```bash
pip install -r requirements.txt
```

---

# 6. Test Django

Start the development server.

```bash
python manage.py runserver
```

Open:

```text
http://127.0.0.1:8000
```

Stop the server with:

```text
Ctrl + C
```

---

# 7. Create the Database Folder

Return to the project root.

```bash
cd ..
```

Create the database folder.

```bash
mkdir db
cd db
```

---

# 8. Create the PostgreSQL Dockerfile

**File**

```text
db/Dockerfile
```

```dockerfile
FROM postgres:15

ENV POSTGRES_USER=student
ENV POSTGRES_PASSWORD=student
ENV POSTGRES_DB=pokedex_db
```

---

# 9. Create `run_db.sh`

**File**

```text
db/run_db.sh
```

```bash
#!/bin/bash

docker build -t db-img .

docker run -d --rm --name db-container --network pokedex-network db-img
```

Make it executable.

```bash
chmod +x run_db.sh
```

---

# 10. Create the Docker Network

Return to the project root.

```bash
cd ..
```

Create the network.

```bash
docker network create pokedex-network
```

Inspect it if needed.

```bash
docker network inspect pokedex-network
```

Remove it if needed.

```bash
docker network rm pokedex-network
```

---

# 11. Start PostgreSQL

```bash
cd db
./run_db.sh
```

Verify it is running.

```bash
docker ps
```

---

# 12. Verify the Database

Enter the PostgreSQL container.

```bash
docker exec -it db-container bash
```

Connect to PostgreSQL.

```bash
psql -d pokedex_db -U student
```

Connect to the database if necessary.

```sql
\c pokedex_db
```

Exit PostgreSQL.

```sql
\q
```

Exit the container.

```bash
exit
```

---

# 13. Configure Django

Move back into the Django project.

```bash
cd ../pokedex_proj
```

Open:

```text
pokedex_proj/settings.py
```

Update `ALLOWED_HOSTS`.

```python
ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
]
```

Replace the default SQLite configuration with PostgreSQL.

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "pokedex_db",
        "USER": "student",
        "PASSWORD": "student",
        "HOST": "db-container",
        "PORT": "5432",
    }
}
```

---

# 14. Create the Django Dockerfile

**File**

```text
pokedex_proj/Dockerfile
```

```dockerfile
FROM python:latest

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

---

# 15. Create `run_server.sh`

**File**

```text
pokedex_proj/run_server.sh
```

```bash
#!/bin/bash

docker build -t django-img .

docker run \
  --rm \
  --name django-container \
  --network pokedex-network \
  -p 8000:8000 \
  django-img
```

Make it executable.

```bash
chmod +x run_server.sh
```

---

# 16. Start Django

```bash
./run_server.sh
```

Open:

```text
http://localhost:8000
```

---

# 17. Enter the Django Container

Open another terminal.

```bash
docker exec -it django-container bash
```

---

# 18. Run the Initial Migrations

Inside the Django container:

```bash
python manage.py migrate
```

Exit the container.

```bash
exit
```

---

# 19. Verify the Django Tables

Enter the PostgreSQL container.

```bash
docker exec -it db-container bash
```

Connect to PostgreSQL.

```bash
psql -d pokedex_db -U student
```

List the tables.

```sql
\dt
```

View the database relationships.

```sql
\d
```

Exit PostgreSQL.

```sql
\q
```

Exit the container.

```bash
exit
```

---

# Daily Startup

### Start PostgreSQL

```bash
cd db
./run_db.sh
```

### Start Django

```bash
cd ../pokedex_proj
./run_server.sh
```

---

# Helpful Commands

## Running Containers

```bash
docker ps
```

---

## Enter Django

```bash
docker exec -it django-container bash
```

---

## Enter PostgreSQL

```bash
docker exec -it db-container bash
```

---

## Run Migrations

```bash
python manage.py migrate
```

---

## Inspect the Docker Network

```bash
docker network inspect pokedex-network
```

---

# Checklist

* [ ] Django project created
* [ ] Virtual environment created
* [ ] Virtual environment activated
* [ ] Django installed
* [ ] Psycopg installed
* [ ] `requirements.txt` created
* [ ] PostgreSQL Dockerfile created
* [ ] `run_db.sh` created
* [ ] Docker network created
* [ ] PostgreSQL container running
* [ ] `ALLOWED_HOSTS` configured
* [ ] PostgreSQL configured in `settings.py`
* [ ] Django Dockerfile created
* [ ] `run_server.sh` created
* [ ] Django container running
* [ ] Initial migrations completed
* [ ] Django tables verified in PostgreSQL
