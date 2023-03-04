const { Sequelize, Model, DataTypes } = require("sequelize");
const LOGGER = require('../configuration/logger')
const connect = () => {

    const hostName = "localhost";
    const userName = "lunch";
    const password = "bot";
    const database = "lunchbot";
    const dialect = "postgres";

    LOGGER.info(`${hostName} ${password}`)

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        logging: false,
        sync: {
            alter: true
        },
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.food = require("../model/food.model")(sequelize, DataTypes, Model);
    db.vote = require("../model/vote.model")(sequelize, DataTypes, Model);

    return db;
}

module.exports = {
    connect
}