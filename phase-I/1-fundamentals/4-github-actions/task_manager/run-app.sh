echo 'BUILDING APP IMAGE'
docker build -f ./dockerfiles/Dockerfile.run -t run-task-manager .

echo 'RUNNING APP'
docker run -it --rm run-task-manager