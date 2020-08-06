// this will block the i/o
var fs = require("fs");
var context = fs.readFileSync("file.txt",'utf-8')
console.log("The value is : ")
console.log(context);