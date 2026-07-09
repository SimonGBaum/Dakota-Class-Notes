echo "Build Docker Image"
docker build -f ./Dockerfile.test -t py-dock .

echo "Run Python Container"
docker run --rm py-dock