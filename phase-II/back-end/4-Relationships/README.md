# Intro to Django ORM

## Part I

- What and Why Django?
- What is  a `venv`
- deactivate and creating a new `venv`
- Installing Django
- creating a new Django Project
  - nested directory 
  - within this directory
- freezing dependencies
- Django Apps and SRP
- Creating our PostgreSQL Container
- Setting Up our Server
    - Connecting Django with PostgreSQL
        - Psypg3
        - Database configurations
        - Dockerfile
        - running contianer linked to postgres-container
    - Entering the Docker Container
        - makemigrations
        - migrating
- Object Relational Mapping(ORM)
    - Models and Tables
    - Creating a DataTable Entry

## Part II

- Useful Model Fields
- Object Fixtures
- class methods for our models
- Django Admin Site

## List for starting django project

1. deactivate current venv
2. create a new venv
3. activate the new venv
  - add to .gitignore
4. install python dependencies with pip
  - Django
  - Psycopg3
5. Create Dockerfiles for db and Django
6. Create Docker network
7. run the db contianer
8. Configure settings.py
  - ALLOWED_HOSTS
  - DATABASE
9. Run the django-container
10. Enter the django-container
11. Migrate migrations onto the database