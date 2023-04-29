import Food from "../model/food.model";
import { logger } from "../configuration/logger";

export default class FoodRepository {
    static async getFoods() {
        try {
            return await Food.findAll();
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    static async createFood(foodName: string) {
        const [food, created] = await Food.findOrCreate({
            where: { name: foodName },
        });
        if (created) {
            logger.debug(
                `database: added food "${food.name}" with id ${food.id}`
            );
        } else {
            logger.debug(
                `database: tried to add existing food "${food.name}" with id ${food.id}`
            );
        }
        return food;
    }
}
