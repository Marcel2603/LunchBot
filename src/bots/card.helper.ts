import {CardFactory} from "botbuilder";
import LunchService from "../service/lunch.service";

const DEFAULT_BODY = [{
    "id": "newFood",
    "type": "Input.Text"
},
    {
        "type": "ActionSet",
        "actions": [
            {
                "type": "Action.Submit",
                "title": "Submit"
            }
        ]
    }]

export default class CardHelper {
    static async createCard() {
        let food = (await LunchService.getFoods()).map(item => {
            return {
                "id": item["id"].toString(),
                "title": `${item["name"]}`,
                "type": "Input.Toggle",
                "value": "false"
            }
        })
        return CardFactory.adaptiveCard({
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                ...food,
                ...DEFAULT_BODY
            ]
        });
    }
}