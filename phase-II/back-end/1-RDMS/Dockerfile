FROM postgres:15

WORKDIR /app

COPY . .

ENV POSTGRES_USER=student
ENV POSTGRES_PASSWORD=student
ENV POSTGRES_DB=dakota_db

CMD ["postgres"]