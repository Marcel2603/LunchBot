import {sequelize} from "../configuration/sequelize.configuration";


export default class VoteRepository {

    static async getVotes() {
        try {
            return await sequelize.models.vote.findAll();
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    static async createVote(inputVote) {
        try {
            return await sequelize.models.vote.findOrCreate({where: inputVote})
        } catch (err) {
            console.error(err)
            return null
        }
    }
}