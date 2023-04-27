// Import required bots services.
// See https://aka.ms/bot-services to learn more about the different parts of a bots.
const {
    CloudAdapter,
    ConfigurationBotFrameworkAuthentication
} = require('botbuilder');

const {AdaptiveCardsBot} = require('../bots/adaptive-cards.bot');

const botFrameworkAuthentication = new ConfigurationBotFrameworkAuthentication({
});

// Create adapter. See https://aka.ms/about-bot-adapter to learn more about adapters.
const adapter = new CloudAdapter(botFrameworkAuthentication);

// Catch-all for errors.
adapter.onTurnError = async (context, error) => {
    // This check writes out errors to console log .vs. app insights.
    // NOTE: In production environment, you should consider logging this to Azure
    //       application insights. See https://aka.ms/bottelemetry for telemetry
    //       configuration instructions.
    console.error(`\n [onTurnError] unhandled error: ${error}`);

    // Send a trace activity, which will be displayed in Bot Framework Emulator
    await context.sendTraceActivity(
        'OnTurnError Trace',
        `${error}`,
        'https://www.botframework.com/schemas/error',
        'TurnError'
    );

    // Send a message to the user
    await context.sendActivity('The bots encountered an error or bug.');
    await context.sendActivity('To continue to run this bots, please fix the bots source code.');
};

// Create the AdaptiveCardsBot.
const bot = new AdaptiveCardsBot();

module.exports = {
    bot: bot,
    adapter: adapter
}