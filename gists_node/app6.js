const http = require("http");
const fs   = require("fs");
const path = require("path");
const url  = require("url");

var server = http.createServer((req,res)=>{
    var urlparts = url.parse(req.url);
    // console.log(urlparts);
    var doc = "./data"+urlparts.pathname;
    console.log(doc);
    fs.exists(doc,(isexists)=>{
        if (isexists){
            // read the file
            console.log(isexists);
            fs.readFile(doc,'utf-8',(err,data)=>{
                if(err){
                    console.log(err);
                    res.writeHead(404);
                }
                
                res.writeHead(200,{'Content-Type':'text/plain'})
                res.write(data);
                res.end();
            })
        }else{
            res.writeHead(404);

        }
    })

    
}).listen(8000)
