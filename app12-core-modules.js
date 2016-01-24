var fs = require('fs');

fs.writeFileSync("corn.txt", "Corn is good, corn is life");

console.log(fs.readFileSync("corn.txt").toString());

// Summary: fs is a core module that lets you write, read, and delete files.

var path = require('path');
var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

// Summary: path is also a core module that allows you to correct or normalize your paths. Windows may use '/' to separate folders and Macs may use '/' to separate folders. Path can figure out which slash your OS uses and adjust them. Path can also recognize common mistakes like double slashes as seen in var websiteHome and remove one to correct the mistake.

setInterval(function() {
  console.log("beef");
}, 2000);

// Summary: setInterval can perform functions to fire after a certain amount of time passes over and over. When the time runs out it fires the function and then counts down again and fires again. In this example console.log("beef") fires every two seconds.

console.log(__dirname);
console.log(__filename);

// Summary: __dirname is a way to show the path of the file that is calling it. __filename is a way to show the path, basename, and extension of the file that is calling it.