const schedule = require('node-schedule');

const startVoting = "10/1 * * * *"
const finishVoting = "20/2 * * * *"
// const disable = "-"
exports.init = () => {
    schedule.scheduleJob(startVoting, function () {
        /*
        * clear db
        * Init lunch-votes
        * Create Card
        * Post Message
         */
        console.log('Start Voting!');
    });
    schedule.scheduleJob(finishVoting, function () {
        /*
        * Calculate Votes
        * Create Result
        * Post Message
         */
        console.log('Finish Voting!');
    });
}
