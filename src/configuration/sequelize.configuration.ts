import { Sequelize } from "sequelize";
import { config } from "./configurationProvider";

export const sequelize = new Sequelize(
    config()["database"]["table"],
    config()["database"]["user"],
    config()["database"]["password"],
    {
        host: config()["database"]["host"],
        dialect: "postgres",
        logging: false,
        benchmark: true,
    }
);
