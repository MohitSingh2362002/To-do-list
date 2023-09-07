const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const app= express();
const port=3000;
const listItems = [];
const workItems = [];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

    const Day = date.getDate();


    res.render("list",{
        listTitle: Day,
        listItems:listItems,
    })
    })
app.get("/work" ,function(req,res){
    res.render("list",{
        listTitle: "Work List",
        listItems:workItems});
})
app.post("/",function(req,res){
    if(req.body.listSubmit==="work"){
        workItems.push(req.body.ToDo);
        res.redirect("/work");
    }else{
        listItems.push(req.body.ToDo);
        res.redirect("/");

    }
})
app.listen(port, () =>{
    console.log(`Listening on port: ${port}` );
})