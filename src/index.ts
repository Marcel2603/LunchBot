import winston from "winston";
import express from "express"
import expressWinston from "express-winston"
import {sequelize} from "./configuration/sequelize.configuration";
import initSchedulers from "./scheduler/lunch.scheduler"
import {testRouter} from "./router/test.router";
import {botRouter} from "./router/bot.router";




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
        console.log(error);
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
    console.log()
    app.use("/test", testRouter);
    app.use("/api/messages", botRouter);

    initSchedulers()

    app.listen(
        port, hostname, () => {
            console.log(`Example app listening at http://${hostname}:${port}`);
        });
}

init()