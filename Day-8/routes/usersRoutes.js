const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const { name, age } = req.query;

    res.json({
        message: "GET request successful",
        data: {
            name,
            age,
        }
    });
});

router.post("/", (req, res) => {
    const { name, email } = req.body;

    res.json({
        message: "POST request successful",
        data: {
            name,
            email,
        },
    });
});

module.exports = router;