// const multByTwo = num => num * 2;
const multByTwo = (num) => {
    if (typeof num === "string"){
        return "Improper Input!"
    }
    return num * 2
}

const isEven = num => num < 2 ? false : num % 2 === 0;

module.exports = { multByTwo, isEven };