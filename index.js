const express = require("express");
const lunchScheduler = require("./src/scheduler/lunch.scheduler")
const testRouter = require("./src/router/test.router")
const botRouter = require("./src/router/bot.router")
const sequelize = require("./src/configuration/sequelize.configuration")
var expressWinston = require('express-winston');
var winston = require('winston'); // for transport
const port = 3000;
const hostname = "0.0.0.0"

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }


}

async function init() {
    await assertDatabaseConnectionOk();
    const app = express();


    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        })
    );
    app.use(expressWinston.logger({
        transports: [
            new winston.transports.Console()
        ],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
        )
    }));
    app.use("/test", testRouter);
    app.use("/api/messages", botRouter);

    lunchScheduler.init()

    app.listen(
        port, hostname, () => {
            console.log(`Example app listening at http://${hostname}:${port}`);
        });
}

init()