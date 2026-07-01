docker build -f Dockerfile.js -t run-js .
docker build -f Dockerfile.py -t run-py .

echo '\n-- JS OUTPUT START HERE --'
docker run --rm run-js
echo '-- JS END OF OUTPUT --'
echo '\n-- PYTHON OUTPUT START HERE --'
docker run --rm run-py
echo '-- PY END OF OUTPUT --'