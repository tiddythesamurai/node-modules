const util = require("./index.js");
console.log("This is printed immediately.");
util.sleep(3000);
console.log("This is executed three seconds later.")