echo 'BUILDING TEST IMAGE'
docker build -f ./dockerfiles/Dockerfile.test -t test-task-manager .

echo 'RUNNING TESTS'
docker run --rm test-task-manager