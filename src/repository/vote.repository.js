const logger = require('../configuration/logger');
const sequelize = require('../configuration/sequelize.configuration')

class VoteRepository {

    async getVotes() {
        try {
            return await sequelize.models.vote.findAll();
        } catch (err) {
            logger.error(err);
            return [];
        }
    }

    async createVote(inputVote) {
        try {
            return await sequelize.models.vote.findOrCreate({where: inputVote})
        } catch (err) {
            logger.error(err)
            return null
        }
    }
}

module.exports = new VoteRepository();