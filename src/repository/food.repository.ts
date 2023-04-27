import {sequelize} from "../configuration/sequelize.configuration";

export default class FoodRepository {

    static async getFoods() {
        try {
            return await sequelize.models.food.findAll();
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    static async createFood(inputFood) {
        const [food, _] = await sequelize.models.food.findOrCreate({where: inputFood})
        return food
    }
}