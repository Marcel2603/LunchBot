const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('food', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
    }, {
        timestamps: false,
    });
}