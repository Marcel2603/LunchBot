import { scheduleJob } from "node-schedule";
import { config } from "../configuration/configurationProvider";

const startVoting = config()["schedule"]["voting"]["begin"];
const finishVoting = config()["schedule"]["voting"]["end"];

export default function () {
    scheduleJob(startVoting, function () {
        // TODO:
        //  clear db
        //  Init lunch-votes
        //  Create Card
        //  Post Message
        console.log("Start Voting!");
    });
    scheduleJob(finishVoting, function () {
        // TODO:
        //  Calculate Votes
        //  Create Result
        //  Post Message
        console.log("Finish Voting!");
    });
}
