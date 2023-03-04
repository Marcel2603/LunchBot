const express = require("express");
const lunchScheduler = require("./src/scheduler/lunchScheduler")
const testRouter = require("./src/routes/test")
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use("/test", testRouter);

lunchScheduler.init()

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});