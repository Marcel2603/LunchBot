import { DataTypes, Model } from "sequelize";
import { sequelize } from "../configuration/sequelize.configuration";

export default class Food extends Model {
    declare id: number;
    declare name: string;
}

Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
    }
);
