var Bucky = {
  favFood: "bacon",
  favMovie: "Chappie"
};

var Person = Bucky;

Person.favFood = "salad";
console.log(Bucky.favFood);

// Summary: When assigning a variable to a JavaScript object and then changing the values of that variable you are also changing the values of the JavaScript object since both the JavaScript object and the variable point to the same reference.

