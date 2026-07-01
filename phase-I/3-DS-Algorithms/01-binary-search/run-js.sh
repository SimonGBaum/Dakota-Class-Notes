echo 'BUILDING DOCKER IMAGE'

docker build -f ./dockerfiles/Dockerfile.js -t binary-search-js .

echo 'RUNNING BINARY SEARCH JS'

docker run --rm binary-search-js