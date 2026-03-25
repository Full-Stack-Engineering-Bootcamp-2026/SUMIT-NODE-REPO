 const express = require('express');
 const path = require('path');
 const router = express.Router();


 
router.get('/users',(req, res, next)=>{
    console.log("In the User router");
    console.log("The method used is ",req.method);
    console.log("The url used is ",req.url);
    res.send("<h1>This is users page</h1>");
}); 

module.exports = router;