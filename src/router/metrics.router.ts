import express from "express";

export const metricsRouter = express.Router();

metricsRouter.get("/", async function (req, res) {
    res.json({ healthy: true });
});
