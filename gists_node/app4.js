var http = require("http");

var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write("This is a http server")
    res.end()
}).listen(8000)


