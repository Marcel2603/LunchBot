import Vote from "../model/vote.model";
import {logger} from "../configuration/logger";


export default class VoteRepository {

    static async getVotes() {
        try {
            return await Vote.findAll();
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    static async createVote(username: string, foodId: number) {
        const [vote, created] = await Vote.findOrCreate({where: {username: username, foodId: foodId}})
        if (created) {
            logger.debug(`database: saved vote of user ${vote.username} (food id: ${vote.foodId}, vote id: ${vote.id})`)
        } else {
            logger.debug(`database: tried to save existing vote of user ${vote.username} (food id: ${vote.foodId}, vote id: ${vote.id})`)
        }
        return vote
    }
}