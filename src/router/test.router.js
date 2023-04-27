const express = require('express');
const router = express.Router();
const lunchService = require('../service/lunch.service')

router.get('/vote', async function (req, res) {
    const votes = await lunchService.getVotes()
    res.json([...votes])
})

router.post('/vote', async function (req, res) {
    const user = req.query['user']
    const foodId = req.query['foodId']
    await lunchService.voteLunch(user, [foodId])
    res.json({user: user, food: foodId});
})

router.get('/food', async (req, res) => {
    res.json(await lunchService.getFoods())
})

router.post('/food', async (req, res) => {
    const food = await lunchService.addFood(req.query['name'])
    res.json(food)
})

module.exports = router;