const logger = require('../configuration/logger');
const Vote = require('../model/vote.model')


class FootRepository {

    // db = {};
    //
    // constructor() {
    //     this.db = connect();
    //     // For Development
    //     this.db.sequelize.sync().then(() => {
    //         console.log("Drop and re-sync db.");
    //     });
    // }

    async getFoods() {
        try {
            const foods = await Vote.findAll();
            logger.info('foods:::', foods);
            return foods;
        } catch (err) {
            logger.error(err);
            return [];
        }
    }
}

module.exports = new FootRepository();