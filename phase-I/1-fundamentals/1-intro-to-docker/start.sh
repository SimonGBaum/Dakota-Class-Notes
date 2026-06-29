echo 'BUILDING DOCKER IMAGE'
docker build -t hello-docker .

echo 'RUNNING CONTAINER'
docker run --rm --name ex-container hello-docker

echo 'PROCESS COMP'