import {Sequelize} from "sequelize";
import foodModel from "../model/food.model";
import voteModel from "../model/vote.model";


export const sequelize = new Sequelize(
    process.env["DB_TABLE"] || "lunchbot",
    process.env["DB_USER"] || "lunch",
    process.env["DB_PASSWORD"] || "bot", {
        host: process.env["DB_HOST"] || "localhost",
        dialect: 'postgres',
        logging: false,
        benchmark: true
    });

const modelDefiners = [foodModel, voteModel]

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}