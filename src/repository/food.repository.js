const logger = require('../configuration/logger');
const sequelize = require('../configuration/sequelize.config')


class FootRepository {

    async getFoods() {
        try {
            const foods = await sequelize.models.food.findAll();
            logger.info('foods:::', foods);
            return foods;
        } catch (err) {
            logger.error(err);
            return [];
        }
    }
}

module.exports = new FootRepository();