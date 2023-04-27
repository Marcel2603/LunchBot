import {MessageFactory, TeamsActivityHandler} from "botbuilder";
import CardHelper from "./card.helper";
import LunchService from "../service/lunch.service";

export default class AdaptiveCardsBot extends TeamsActivityHandler {
    constructor() {
        super();

        this.onMessage(async (context, next) => {
            console.error("Handle some request")
            const activity = context.activity;
            if (activity.value) {
                await this.updateVotes(activity.from.name, activity.value)
            }

            const card = await CardHelper.createCard();
            if (!activity.replyToId) {
                await context.sendActivity(MessageFactory.attachment(card));
            } else {
                const message = MessageFactory.attachment(card);
                message.id = activity.replyToId;
                message.conversation = activity.conversation
                await context.updateActivity(message);
            }
            await next();
        });
    }

    async updateVotes(username, values) {
        if (values.newFood) {
            await LunchService.createAndVoteFood(username, values.newFood)
        }
        const votes = Object.entries(values)
            .filter(entry => Number.isInteger(Number(entry[0])) && entry[1] === 'true')
            .map(entry => Number(entry[0]))
        await LunchService.voteLunch(username, votes)
    }
}