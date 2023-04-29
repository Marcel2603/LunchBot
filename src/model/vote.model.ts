import {DataTypes, Model} from "sequelize";
import {sequelize} from "../configuration/sequelize.configuration";


export default class Vote extends Model {
    declare id: number
    declare username: string
    // TODO: switch this to camel case
    declare food_id: number
}

Vote.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        food_id: {
            references: {
                model: "food",
                key: "id"
            },
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{
        sequelize,
        timestamps: false,
    }
);
