DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    breed VARCHAR(20) DEFAULT 'Mixed',
    color VARCHAR(10) NOT NULL,
    age INTEGER NOT NULL CHECK (age >= 0 AND age <= 30),
    UNIQUE(name, breed)
);

\COPY dogs(id, name, breed, color, age) FROM './dog_data.csv' DELIMITER ',' CSV HEADER;

-- INSERT INTO dogs (name, breed, color, age) 
-- VALUES
-- ('Tippi', 'pitbull', 'gold',9),
-- ('Nala', 'black lab', 'black',10);

SELECT * FROM dogs;

SELECT * FROM dogs LIMIT 10;

SELECT * FROM dogs WHERE age <=4;


SELECT COUNT(*) FROM dogs;

SELECT COUNT(*) FROM dogs WHERE age<=4;

SELECT MAX(age) FROM dogs;

SELECT MIN(age) FROM dogs;

SELECT age, COUNT(age) FROM dogs GROUP by age;

SELECT age, COUNT(age) FROM dogs GROUP by age HAVING age>5;

SELECT age, COUNT(age) FROM dogs WHERE breed='Labrador' GROUP BY age HAVING age>5;

SELECT age, COUNT(age) FROM dogs WHERE breed='Labrador' GROUP BY age HAVING age>5 LIMIT 1 OFFSET 1;