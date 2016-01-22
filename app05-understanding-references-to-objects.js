var Bucky = {
  favFood: "bacon",
  favMovie: "Chappie"
};

var Person = Bucky;

Person.favFood = "salad";
console.log(Bucky.favFood);

// Summary: When assigning a variable to a JavaScript object and then changing the values of that variable you are also changing the values of the JavaScript object since both the JavaScript object and the variable point to the same reference.

console.log(19 == "19"); // true
console.log(19 === "19"); // false

// Summary: Double equals compares the value only. On line 13, 19 is an integer and "19" is a string but their values are the same. Double equals is only comparing the values not the type therefore it outputs true. Triple equals compares both the value and the type. So on line 14, even though the values are the same the type is not. 19 is an integer and "19" is a string therefore it outputs false.