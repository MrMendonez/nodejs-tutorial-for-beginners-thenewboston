function User() {
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLife(targetPlayer) {
    targetPlayer.life += 1;
    console.log(this.name + " gave 1 life to " + targetPlayer.name);
  }
}

var Darryl = new User;
var Rebecca = new User;
Darryl.name = "Darryl";
Rebecca.name = "Rebecca";

Darryl.giveLife(Rebecca);

console.log("Darryl: " + Darryl.life);
console.log("Rebecca: " + Rebecca.life);

// You can add functions to all objects
User.prototype.uppercut = function(targetPlayer) {
  targetPlayer.life -= 3;
  console.log(this.name + " uppercutted " + targetPlayer.name);
};

Rebecca.uppercut(Darryl);
console.log("Darryl: " + Darryl.life);
console.log("Rebecca: " + Rebecca.life);


// You can add properties to all objects
User.prototype.magic = 60;
console.log(Darryl.magic);
console.log(Rebecca.magic);

console.log(Darryl)

// Summary: This is a small example of a game. First a function User is created with properties name, life, and giveLife (which is a function). We can use this to create new objects such as 'Darryl' and 'Rebecca' as seen on lines 10 and 11. We assign them first names in lines 12 & 13. Lines 21 - 24 show that you can add functions on the fly to 'User' which will then be applied to variables 'Darryl' & 'Rebecca'. Lines 32 - 34 show that you can add properties to all objects by adding a property to 'User'. Once it is added to 'User' it is also applied to 'Darryl' & 'Rebeeca'.