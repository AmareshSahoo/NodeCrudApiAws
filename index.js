const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./db.js");
var employeeController = require("./controllers/employeeController.js");

var app = express();
var router = express.Router();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));


router.get("/", (req, res) => { res.status(200).send("WELCOME TO AWS NODE API By AMARESH") });

app.use("/employees", employeeController);

router.get('/health', (req, res) => { res.status(200).send("Status: OK") })

app.listen(process.env.PORT || 5000, () =>
    console.log("Server started at port : 5000")
);