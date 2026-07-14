function third() {
  console.log("Third function");
}

function second() {
  console.log("Second function starts");
  third();
  console.log("Second function ends");
}

function first() {
  console.log("First function starts");
  second();
  console.log("First function ends");
}

first();