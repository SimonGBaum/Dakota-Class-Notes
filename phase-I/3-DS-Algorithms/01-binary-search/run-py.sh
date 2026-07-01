echo 'BUILDING DOCKER IMAGE'

docker build -f ./dockerfiles/Dockerfile.py -t binary-search-py .

echo 'RUNNING BINARY SEARCH PY'

docker run --rm binary-search-py