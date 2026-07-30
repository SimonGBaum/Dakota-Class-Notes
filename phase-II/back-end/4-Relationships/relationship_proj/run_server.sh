docker build -t relationship-django-img .

docker run --rm \
-v "$(pwd)/:/app/" \
-p 8001:8000 \
--name relationship-django-container \
--network relationship-network \
--user "$(id -u):$(id -g)" \
relationship-django-img

#  The line:
#  --user "$(id -u):$(id -g)" \
#  is just for Linux users to avoid file permission issues
