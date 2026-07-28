docker build -t django-img .

docker run --rm \
-v "$(pwd)/:/app/" \
-p 8000:8000 \
--name django-container \
--network pokedex-network \
--user "$(id -u):$(id -g)" \
django-img

#  The line:
#  --user "$(id -u):$(id -g)" \
#  is just for Linux users to avoid file permission issues
