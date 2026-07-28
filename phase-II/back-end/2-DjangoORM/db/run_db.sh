docker build -t db-img .

docker run -d --rm --name db-container --network pokedex-network db-img