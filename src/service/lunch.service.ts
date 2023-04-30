import FoodRepository from "../repository/food.repository";
import VoteRepository from "../repository/vote.repository";

export default class LunchService {
    static async voteLunch(username, foodIdList) {
        for (const foodId of foodIdList) {
            await VoteRepository.createVote(username, foodId);
        }
    }

    static async createAndVoteFood(username, foodName) {
        const food = await FoodRepository.createFood(foodName);
        await LunchService.voteLunch(username, [food.id]);
    }

    static async getFoods() {
        return await FoodRepository.getFoods();
    }

    static async addFood(foodName) {
        return await FoodRepository.createFood(foodName);
    }

    static async getVotes() {
        const votes = await VoteRepository.getVotes();
        const result = new Map();
        votes.forEach((vote) => {
            let lunch = [vote["username"]];
            if (result.has(vote["food_id"])) {
                lunch = result.get(vote["food_id"]);
                lunch.push(vote["username"]);
            }
            result.set(vote["food_id"], lunch);
        });
        return result;
    }
}
