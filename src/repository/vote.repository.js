const logger = require('../configuration/logger');
const sequelize = require('../configuration/sequelize.config')

class VoteRepository {

    async getVotes() {
        try {
            const votes = await sequelize.models.vote.findAll();
            logger.info('votes:::', votes);
            return votes;
        } catch (err) {
            logger.error(err);
            return [];
        }
    }

    async createVote(inputVote) {
        try {
            console.log(inputVote)
            const vote = await sequelize.models.vote.create(inputVote)
            return vote
        } catch (err) {
            logger.error(err)
            return null
        }
    }
}

module.exports = new VoteRepository();