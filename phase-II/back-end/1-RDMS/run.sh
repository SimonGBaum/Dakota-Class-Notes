echo "Building Img"
docker build -t postgres-img .

echo "Running Container"
docker run --rm \
-v "$(pwd)"/practice.sql:/app/practice.sql \
-v "$(pwd)"/dog_data.csv:/app/dog_data.csv \
--name postgres-container \
postgres-img