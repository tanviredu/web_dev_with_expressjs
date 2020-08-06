const express = require("express")
var app = express()

app.get('/',(req,res)=>{
    res.send("welcome to express")
})

app.get('/customer',(req,res)=>{
    res.send("welcome to the customer page")
})

app.listen(8000,()=>{
    console.log("Server started");
})