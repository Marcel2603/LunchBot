# Lunchbot

## Todos

- [x] Load Config from env
- [ ] make tsconfig stricter, add formatter
- [x] define models in a awy better suited to typescript
- [x] use only one logger library
- [x] Add logic create food
  - vote after creation
  - check that food does not exists, else vote
- [x] Add logic for getting food
- [x] Add logic to vote for food
  - only one vote per food and user
- [ ] Add logic to calculate results
  - [x] for each food, get list of user
  - [ ] then distinct user by starting the smallest group
- [ ] Add bot logic
  - [x] Create Bot
  - [x] Create Card
  - [x] Update Card
  - [ ] Create Conversation
  - [ ] Update Conversation
- [ ] typedi einbauen

## Links

https://dev.to/azure/beginners-guide-to-ms-teams-development-2-bots-590m

## Developing the app

This project used prettier for code formatting. It is recommended to install the prettier extension for you IDE.

## Running the app

You need a test account to use the bot in teams. See below on how to create one.

- for viewing: `docker-compose up`
- for developing `docker-compose run lunchbot yarn && yarn dev`

## Creating a bot in Teams

1. Install the "Developer Portal" app for your account in Teams
2. Create a new bot in the "Tools" tab
3. Create a new app in the "Apps" tab
4. Under "App features" add a bot to the app, select your previously created bot
