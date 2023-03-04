const foodRepo = require('../repository/food.repository')
// const voteRepo = require('../repository/vote.repository')

class LunchService {
    constructor() {
    }

    async getLunch() {
        // console.log(voteRepo.createVote({username: "test", food_id: 1}))
        return await foodRepo.getFoods();
    }
}

module.exports = new LunchService()