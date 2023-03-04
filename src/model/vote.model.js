module.exports = (sequelize, DataTypes, Model) => {

    class Vote extends Model {
    }

    Vote.init({
        // Model attributes are defined here
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
        sequelize, // We need to pass the connection instance
        modelName: 'vote' // We need to choose the model name
    });

    return Vote;
}