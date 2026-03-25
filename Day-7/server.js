const path = require('path')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');


app.use(bodyParser.urlencoded({extended : false }));
app.use(userRoutes);
app.use(productRoutes);
app.use((req,res,next)=>{
    console.log("Welcome")
    next();
});

app.use('/',(req,res,next)=>{
    console.log("The route method is :",req.method);
    console.log("the route used is ",req.url);  
    next();
});

app.use((req,res,next)=>{
    res.send("<h1>Welcome to express js</h1>");
})
    
app.listen(3000);





