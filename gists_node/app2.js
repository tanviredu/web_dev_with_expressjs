
// this is a prmose based work
// if you dont want to use the callback


const fs = require("fs").promises

async function readData(path){
    const data = await fs.readFile(path,'utf-8');
    return data;
    // this is a promise   
}

const data = readData('file.txt');
data.then((data,err)=>{
    if(err){
        console.log(err)
    }
    console.log(data);
})