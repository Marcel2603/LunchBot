const logger = require('../configuration/logger');
const model = require('../configuration/db.config')


class FootRepository {

    async getFoods() {
        try {
            const foods = await model.models.food.findAll();
            logger.info('foods:::', foods);
            return foods;
        } catch (err) {
            logger.error(err);
            return [];
        }
    }
}

module.exports = new FootRepository();