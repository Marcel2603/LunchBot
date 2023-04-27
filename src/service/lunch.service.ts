import FoodRepository from "../repository/food.repository"
import VoteRepository from "../repository/vote.repository";

export default class LunchService {
    constructor() {
    }

    static async voteLunch(username, foodsId) {
        for (const id of foodsId) {
            await VoteRepository.createVote({username: username, food_id: id})
        }
    }

    static async createAndVoteFood(username, foodName) {
        const food = await FoodRepository.createFood({name: foodName})
        await LunchService.voteLunch(username, [food["id"]])
    }

    static async getFoods() {
        return await FoodRepository.getFoods()
    }

    static async addFood(foodName) {
        return await FoodRepository.createFood({name: foodName})
    }

    static async getVotes() {
        let votes = await VoteRepository.getVotes();
        let result = new Map()
        votes.forEach(vote => {
            let lunch = [vote["username"]]
            if (result.has(vote["food_id"])) {
                lunch = result.get(vote["food_id"])
                lunch.push(vote["username"])
            }
            result.set(vote["food_id"], lunch)
        })
        return result
    }
}