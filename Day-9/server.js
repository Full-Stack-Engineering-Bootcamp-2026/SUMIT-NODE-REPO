const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");


app.use(bodyParser.urlencoded({ extended: false }));


const productRoutes = require("./routes/Products");
app.use(productRoutes);


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});