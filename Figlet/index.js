const colors = require('colors');
var figlet = require("figlet");

figlet("MR. ROBOT!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.red);
});