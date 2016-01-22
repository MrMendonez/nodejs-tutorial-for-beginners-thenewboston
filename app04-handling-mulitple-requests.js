function placeAnOrder(orderNumber) {
  console.log("Customer order: ", orderNumber);
  cookAndDeliverFood(function() {
    console.log("Delivered food order: ", orderNumber);
  });
};

// Simulate 5 seconds as if collecting data from a database that takes 5 seconds.
function cookAndDeliverFood(callback) {
  setTimeout(callback, 5000);
};

// Simulate users' web requests
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

// Summary: setTimeout schedules an event but until that time NodeJs will continue on with the program and go back to finish the program when the data is collected or at it's schedule time. In the program above placeAnOrder(1) fires. "Customer order: ", orderNumber is printed. The cookAndDeliverFood function is then scheduled to fire in 5 seconds. In the mean time NodeJS will continue on to placeAnOrder(2), and then (3), (4), (5), and (6). So for placeAnOrder(1-6) it will print '"Customer order: ", orderNumber' in less than five seconds (much less). After five seconds NodeJS will print "Delivered food order: ", orderNumber for all six placeAnOrder functions. This is why NodeJS is so effecient. While it's gathering data from a database (or waits for setTimeout timer to end), it can continue on to the next function(s). It will go back to finish the previous fucntion when the data is finally collected (or when the setTimeout ends).