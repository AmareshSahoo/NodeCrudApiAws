const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const { mongoose } = require("./db.js");
var employeeController = require("./controllers/employeeController.js");

var app = express();
var router = express.Router();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Node JS Crud API",
            description: "Crud JS API Information",
            contact: {
                name: "Amazing Developer",
            },
            servers: ["http://localhost:3000"],
        },
    },
    // ['.routes/*.js']
    apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT || 5000, () =>
    console.log("Server started at port : 5000")
);

// Routes
/**
 * @swagger
 * /employees:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.use("/employees", employeeController);


app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/employees', employeeController);

router.get('/health', (req, res) => { res.send("Status: OK") })