console.log("Hello OOP in JS")

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError("Name must be a string");
        }
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (typeof value !== 'number') {
            throw new TypeError("Age must be a number");
        }
        this._age = value;
    }

    toString() {
        return `Person(name=${this.name}, age=${this.age})`;
    }
}

const person = new Person("John Doe", 30);
console.log(person.toString());