require('./rebecca10');
require('./darryl10');
console.log()

// Summary: Whenever you use modules in NodeJS, you are sharing that same module. So when rebecca's movie.favMovie is assigned to 'Lord of the Rings' darryl's movie.favMovie is also set to 'Lord of the Rings' even if we never assigned it that in darryl10.js. module.exports always starts off as an empty object in Node. In movies10.js we give it a property of favMovie and with a value of an empty string. In rebecca10.js we assign movie.favMovie to 'Lord of the Rings'. Since both rebecca10.js and darryl10.js require 'movies10' they are pointing to the same exact module.exports. They are referring to the same exact one, not a copy of module.exports. This is why when we run tutorial10.js both darryl and rebecca have a favMovie of 'Lord of the Rings'.