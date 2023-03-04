module.exports = (sequelize, DataTypes, Model) => {

    class Food extends Model {}

    Food.init({
        // Model attributes are defined here
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
        sequelize,
        modelName: 'food'
    });

    return Food;
}