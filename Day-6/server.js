
const express = require('express');
const app = express();
app.use('/',(req, res, next)=>{
        console.log("in the middleware!!");
        next();
});
app.use('/about',(req, res, next)=>{
        console.log("in the about section")
        res.send("<h1>this is the day 6 in my journey of learning node.js </h1>");
});
app.use('/contact',(req, res, next)=>{
        console.log("in the contact section")
        res.send("<h1>Name:sumit haverikar & Batch : March-2026</h1>");
        
});
app.use('/skills',(req, res, next)=>{
        console.log("in the skills section")
        res.send("<h1>These are my Skills </h1><ol><li>node</li><li>React</li><li>Java</li><li>git</li></ol>");
        
});


app.listen(3000);