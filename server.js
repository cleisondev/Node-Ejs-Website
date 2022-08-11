//bringing the module we dowloaded to this const
const express = require('express');

//putting all functions on this const
const app = express();

//Telling the way I want to render the html using ejs

app.set("view engine", "ejs");

//Creating a route
//index has to be inside of a folder "views"
app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message:"Desenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message:"JS usa JavaScript para renderizar html"
        },
        {
            title: "M",
            message:"uito fácil de usar"
        },
        {
            title: "A",
            message:"mazing"
        },
        {
            title: "I",
            message:"nstall ejs"
        },
        {
            title: "S",
            message:"intaxe simples"
        }

    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando Js"
    res.render("pages/index", {
        //here i'm giving this qualities the array of items
        qualities: items, 
        subtitle: subtitle
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})
//To make it run 
app.listen(8080);
console.log('Running')