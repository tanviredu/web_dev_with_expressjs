// doing the same with the callback
const fs = require("fs");

const data = fs.readFile("file.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }    
    console.log(data);
})