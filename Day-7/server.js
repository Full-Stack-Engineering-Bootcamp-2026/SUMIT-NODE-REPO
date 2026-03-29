const express = require("express");

const app = express();


app.use((req, res, next) => {
    console.log(`the method used is : ${req.method} ,
        The URL is : ${req.url}`);
    next();
});

app.use((req, res, next) => {
    console.log("Welcome to Express App ");
    next();
});

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", (req, res) => {
    res.send("Users Page");
});

app.get("/products", (req, res) => {
    res.send("Products Page");
});


app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});