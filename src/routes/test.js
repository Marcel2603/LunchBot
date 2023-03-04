const express = require('express');
const router = express.Router();
const lunchService = require('../service/lunchService')

/* GET programming languages. */
router.get('/vote', async function (req, res, next) {
    const user = req.query.user
    const food = req.query.food
    console.log(await lunchService.getLunch())
    res.json({user: user, food: food});
});

module.exports = router;