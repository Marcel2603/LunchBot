const schedule = require('node-schedule');

const startVoting = "10/1 * * * *"
const finishVoting = "20/2 * * * *"

exports.init = () => {
    schedule.scheduleJob(startVoting, function () {
        /*
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
