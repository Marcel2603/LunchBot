import {scheduleJob} from "node-schedule"

const startVoting = "10/1 * * * *"
const finishVoting = "20/2 * * * *"
// const disable = "-"
export default function () {
    scheduleJob(startVoting, function () {
        /*
        * clear db
        * Init lunch-votes
        * Create Card
        * Post Message
         */
        console.log('Start Voting!');
    });
    scheduleJob(finishVoting, function () {
        /*
        * Calculate Votes
        * Create Result
        * Post Message
         */
        console.log('Finish Voting!');
    });
}
