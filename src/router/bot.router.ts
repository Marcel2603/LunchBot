import express from "express";
import { adapter, bot } from "../configuration/bot.configuration";

export const botRouter = express.Router();

/* GET programming languages. */
botRouter.post("/", async (req, res) => {
    await adapter.process(req, res, async (context) => await bot.run(context));
});
