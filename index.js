const express = require("express");
const lunchScheduler = require("./src/scheduler/lunchScheduler")
const testRouter = require("./src/routes/test")
const sequelize = require("./src/configuration/db.config")

const port = 3000;

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
    app.use("/test", testRouter);

    lunchScheduler.init()

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

init()