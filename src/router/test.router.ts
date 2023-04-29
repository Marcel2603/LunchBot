import express from "express";
import LunchService from "../service/lunch.service";

export const testRouter = express.Router();

testRouter.get("/vote", async function (req, res) {
    const votes = await LunchService.getVotes();
    res.json([...votes]);
});

testRouter.post("/vote", async function (req, res) {
    const user = req.query["user"];
    const foodId = req.query["foodId"];
    await LunchService.voteLunch(user, [foodId]);
    res.json({ user: user, food: foodId });
});

testRouter.get("/food", async (req, res) => {
    res.json(await LunchService.getFoods());
});

testRouter.post("/food", async (req, res) => {
    const food = await LunchService.addFood(req.query["name"]);
    res.json(food);
});
