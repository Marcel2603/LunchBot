const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    process.env["DB_TABLE"] || "lunchbot",
    process.env["DB_USER"] || "lunch",
    process.env["DB_PASSWORD"] || "bot", {
        host: process.env["DB_HOST"] || "localhost",
        dialect: process.env["DB_DIALECT"] || 'postgres',
        logging: false,
        benchmark: true
    });

const modelDefiners = [require("../model/food.model"), require("../model/vote.model")]


for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize