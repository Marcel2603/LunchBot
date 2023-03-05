const express = require('express');
const router = express.Router();
const lunchService = require('../service/lunch.service')

/* GET programming languages. */
router.post('/vote', async function (req, res, next) {
    const user = req.query.user
    const food = req.query.food
    await lunchService.voteLunch(user, [food])
    res.json({user: user, food: food});
});

router.get('/vote', async function (req, res) {
    const votes = await lunchService.getVotes()
    res.json([...votes])
})

module.exports = router;