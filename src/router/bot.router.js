const express = require('express');
const {adapter, bot} = require('../configuration/bot.configuration')
const router = express.Router();

/* GET programming languages. */
router.post('/', async (req, res, next) => {
    await adapter.process(req, res, async (context) => await bot.run(context));
});

module.exports = router;