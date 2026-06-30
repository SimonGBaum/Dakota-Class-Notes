FROM python:latest

WORKDIR /app/

RUN pip3 install --no-cache-dir requests
# I need to ensure js file gets copied into my img
COPY  main.py /app/


CMD ["python3", "main.py"]