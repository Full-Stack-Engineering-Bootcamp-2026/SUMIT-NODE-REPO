const express = require("express");
const app = express();



app.use(express.json());


const userRoutes = require("./routes/usersRoutes");

app.use("/user", userRoutes);

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});