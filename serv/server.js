const express = require("express");
const app = express();
const port = 3000;

app.use("/", express.static("./dist"))

app.get("/", (req, res) => {
    console.log("Recieved a GET request!")
    res.end();
})

app.listen(port, console.log(`Reservations now listening on port ${port}`))