const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('vote', {
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
    }, {
        timestamps: false,
    });
}