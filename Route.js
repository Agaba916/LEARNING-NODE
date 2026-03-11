const express = require('express');
const path=require('path');
const fs= require('fs');
const App = express();

App.get("/",(req,res)=>{
    const filePath= path.join(__dirname, 'home.txt');
    fs.readFile(filePath, 'utf8',(err,data)=>{
        if(err){
            return res.status(500).send("Error reading file");
        }
    res.send(data);
    });
});

App.get("/:page", (req,res)=>{
    const page = req.params.page;
    const filePath = path.join(__dirname, `${page}.txt`);
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if(err) return res.status(404).send("Page not found");
        res.send(data);
    });
});

App.listen(3000, ()=>console.log("Server running on port 3000"));
