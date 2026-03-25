const express = require('express');
const path = require('path');
const router = express.Router();

  
router.get('/product',(req, res, next)=>{
        console.log("in product router ")
        console.log("the method used is : ",req.method);
        console.log("the url used is : ",req.url);
        res.send(`<form action="/" method = "POST" ><input type ="text"><button type = "submit">ADD PRODUCT</button></input></form>`);
        
    });

router.post('/product',(req ,res,next)=>{
        console.log(req.body);
        res.redirect('/');      
});


module.exports = router;