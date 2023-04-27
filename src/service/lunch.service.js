const foodRepo = require('../repository/food.repository')
const voteRepo = require('../repository/vote.repository')

class LunchService {
    constructor() {
    }

    async voteLunch(username, foodsId) {
        for (const id of foodsId) {
            await voteRepo.createVote({username: username, food_id: id})
        }
    }

    async createAndVoteFood(username, foodName) {
        const food = await foodRepo.createFood({name: foodName})
        await this.voteLunch(username, [food.id])
    }

    async getFoods() {
        return await foodRepo.getFoods()
    }

    async addFood(foodName) {
        return await foodRepo.createFood({name: foodName})
    }

    async getVotes() {
        let votes = await voteRepo.getVotes();
        let result = new Map()
        votes.forEach(vote => {
            let lunch = [vote.username]
            if (result.has(vote.food_id)) {
                lunch = result.get(vote.food_id)
                lunch.push(vote.username)
            }
            result.set(vote.food_id, lunch)
        })
        return result
    }
}

module.exports = new LunchService()