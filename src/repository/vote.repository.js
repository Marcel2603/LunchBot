const {connect} = require('../configuration/db.config');
const logger = require('../configuration/logger');


class VoteRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync().then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async getVotes() {
        try {
            const votes = await this.db.vote.findAll();
            logger.info('votes:::', votes);
            return votes;
        } catch (err) {
            logger.error(err);
            return [];
        }
    }

    async createVote(vote) {
        try {
            const vote = await this.db.vote.create(vote)
            return vote
        } catch (err) {
            logger.error(err)
            return null
        }
    }
}

module.exports = new VoteRepository();