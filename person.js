var person = {
  firstName: "Darryl",
  lastName: "Mendonez",
  age: 35
};

console.log(person);

function addNumber(a, b) {
  return a + b;
}

console.log(addNumber(7, 3));

var printBacon = function() {
  console.log("Bacon is healthy for you. Don't listen to the doctor.");
};

printBacon();

setTimeout(printBacon, 5000);