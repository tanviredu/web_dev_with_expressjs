const express  = require("express");
const mongoose = require("mongoose");
const config   = require("./config");
const nunjucks = require("nunjucks");
const Heros    = require("./models/db");
const app      = express();
const PORT     = 8000;

// setting asset path
app.use('/static',express.static('public'));
app.use(express.urlencoded({extended:true}));
mongoose.set('useFindAndModify',false);

// setting view engine
nunjucks.configure('views',{
    autoescape : true,
    express :app
});


// this is get all thge heros with the index 
//page
app.get('/',(req,res)=>{
    Heros.find({},(err,heros)=>{
        if(err){
            console.log(err);
        }
        res.render("todo.html",{'heros':heros});
    });
});

app.post("/",async (req,res)=>{
    const hero = new Heros({
        name        : req.body.name,
        description : req.body.description

    });
    try{
        console.log(hero);
        await hero.save();
        res.redirect("/");
    }catch(err){
        console.log(err);
        res.redirect("/");
    }
});


// update take one get and one post both

app.get("/edit/:id",(req,res)=>{
    const id = req.params.id;
    Heros.find({},(err,heros)=>{
        res.render("todoedit.html",{heros:heros,id:id})
    });
});

app.post("/edit/:id",(req,res)=>{
    const id = req.params.id;
    Heros.findOneAndUpdate(id,{name:req.body.name,description:req.body.description},(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/")
        }
    })

})



app.get("/remove/:id",(req,res)=>{
    const id = req.params.id;
    Heros.findOneAndDelete(id,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/")
        }
    })
})




const url      = config.mongourl;
const connect  = mongoose.connect(url);
connect.then(()=>{
    console.log("[+] Connected with the Database");
    app.listen(PORT);
    console.log("[+] Server started");
})