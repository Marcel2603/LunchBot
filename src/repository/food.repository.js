const logger = require('../configuration/logger');
const sequelize = require('../configuration/sequelize.configuration')


class FootRepository {

    async getFoods() {
        try {
            return await sequelize.models.food.findAll();
        } catch (err) {
            logger.error(err);
            return [];
        }
    }

    async createFood(inputFood) {
        const [food, _] = await sequelize.models.food.findOrCreate({where: inputFood})
        return food
    }
}

module.exports = new FootRepository();