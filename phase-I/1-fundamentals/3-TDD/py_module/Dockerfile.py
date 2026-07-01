FROM python:latest

WORKDIR /app/

RUN pip3 install --no-cache-dir pytest
# I need to ensure js file gets copied into my img
COPY   . /app/

CMD ["pytest"]