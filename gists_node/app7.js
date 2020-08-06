var http = require("http")
var fs   = require("fs")
var url  = require("url")

var server       = http.createServer((req,res)=>{
    var urlparts = url.parse(req.url);
    var doc      = "./data"+urlparts.pathname;
    fs.exists(doc,(exists)=>{
        if(exists){
            res.writeHead(200,{'Content-Type':"text-plain"});

            // you can pipe in in the response
            fs.createReadStream(doc).pipe(res);
        }else{
            res.writeHead(404);
            res.end("not Found");
        }
    })
}).listen(8000)