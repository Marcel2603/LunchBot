const {Sequelize, Model, DataTypes} = require("sequelize");

const sequelize = new Sequelize("lunchbot","lunch","bot",{
    host: "localhost",dialect: 'postgres', logging: false, benchmark: true
});

const modelDefiners = [require("../model/food.model"), require("../model/vote.model")]


for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize