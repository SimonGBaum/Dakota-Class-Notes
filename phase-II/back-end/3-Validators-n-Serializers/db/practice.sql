DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    breed VARCHAR(20) DEFAULT 'Mixed',
    color VARCHAR(10) NOT NULL,
    age INTEGER NOT NULL CHECK (age >=0 AND age <=30),
    UNIQUE (name, breed)
);