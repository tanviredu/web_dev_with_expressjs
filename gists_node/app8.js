// if you want to use the connect middleware
// use connect

const connect = require("connect") 
const util    = require("util");

// writing  a middleware
var interceptConnection = function(req,res,next){
    console.log(util.format("request method is %s request for %s",req.method,req.url));
}

var server = connect()
.use(interceptConnection)
.use((req,res)=>{
    res.end("hello");
}).listen(8000);