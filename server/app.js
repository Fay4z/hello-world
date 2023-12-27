const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("successfull")
})

app.get("/hello", (req, res) => {
    res.send("welcome to this website");
})

app.get("/randomNum", (req, res) => {
    const randomNum = Math.floor(Math.random() * 100);
    res.send(`${randomNum}`);
    console.log(`${randomNum}`);
})

app.listen(8000, () => {
    console.log("Listening on port 8000");
})