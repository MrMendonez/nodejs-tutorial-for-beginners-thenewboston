var movies = require('./movies9');
movies.printAvatar();
console.log(movies.favMovie);

// Summary: This is another way to export modules than the previous tutorial. In this example, movies9.js puts the functions directly into module.exports. By default module.exports is already declared within NodeJS. It is set as an empty object. We are putting things into it in movies9.js. When we require movies9 in this file we can now access those functions. We just type in the variable name, which is 'movies', then '.', then the name of what we want to call.