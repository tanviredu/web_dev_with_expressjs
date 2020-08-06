// this will not block the IO
const fs   = require("fs").promises

async function readData(){
    const data = await fs.readFile("file.txt","utf-8");
    return data;
}

var info = readData()
info.then((data,err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
