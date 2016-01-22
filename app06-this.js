var Darryl = {
  printFirstName: function() {
    console.log("My name is Darryl.");
    console.log(this === Darryl);
  }
}

Darryl.printFirstName();

// The default calling context is global.
function doSomethingWorthless() {
  console.log("\nI am worthless");
  console.log(this === global);
};

doSomethingWorthless();

// Summary: The term 'this' is whatever is calling it. In the first function, it is being called by 'Darryl.printFirstName();'. Since 'Darryl' is what is calling the function then 'this' is equal to 'Darryl'. In the second function, it is being called by 'doSomethingWorthless();'. Since it is not being called by anything before it it is then being called by 'global'.