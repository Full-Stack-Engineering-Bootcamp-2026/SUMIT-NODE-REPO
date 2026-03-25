
const express = require('express');
const app = express();

// app.get('/user',middleware,())

app.get('/',(req, res, next)=>{
        console.log("in the middleware!!");
        res.send("<h1>welcome to home page</h1>")
        next();
});
app.get('/about',(req, res, next)=>{
        console.log("in the about section")
        res.send("<h1>this is the day 6 in my journey of learning node.js </h1>");
});
app.get('/contact',(req, res, next)=>{
        console.log("in the contact section")
        res.send("<h1>Name:sumit haverikar & Batch : March-2026</h1>");
        
});
app.get('/skills',(req, res, next)=>{
        console.log("in the skills section")
        res.send("<h1>These are my Skills </h1><ol><li>node</li><li>React</li><li>Java</li><li>git</li></ol>");
        
});
// app.use('/',(req, res, next)=>{
//         console.log("in the middleware!!");
//         next();
// });


app.listen(3000);