docker build -t relationship-db-img .

docker run -d --rm \
-p 5433:5432 \
--name relationship-db-container \
--network relationship-network \
relationship-db-img
