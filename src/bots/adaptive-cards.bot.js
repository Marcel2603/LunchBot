const {TeamsActivityHandler, MessageFactory} = require('botbuilder');
const cardHelper = require("./card.helper");
const lunchService = require("../service/lunch.service")
const logger = require("../configuration/logger")
class AdaptiveCardsBot extends TeamsActivityHandler {
    constructor() {
        super();

        this.onMessage(async (context, next) => {
            logger.error("Hanlde some request")
            const activity = context.activity;
            if (activity.value) {
                await this.updateVotes(activity.from.name, activity.value)
            }

            const card = await cardHelper.createCard();
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
            await lunchService.createAndVoteFood(username, values.newFood)
        }
        const votes = Object.entries(values)
            .filter(entry => Number.isInteger(Number(entry[0])) && entry[1] === 'true')
            .map(entry => Number(entry[0]))
        await lunchService.voteLunch(username, votes)
    }
}

module.exports.AdaptiveCardsBot = AdaptiveCardsBot;