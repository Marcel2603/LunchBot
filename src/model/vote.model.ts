import { DataTypes, Model } from "sequelize";
import { sequelize } from "../configuration/sequelize.configuration";

export default class Vote extends Model {
    declare id: number;
    declare username: string;
    declare foodId: number;
}

Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foodId: {
            references: {
                model: "food",
                key: "id",
            },
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
    }
);
