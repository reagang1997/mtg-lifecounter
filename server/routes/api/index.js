const router = require('express').Router();
const playerRoutes = require('./Player.js');

router.use('/player', playerRoutes);

module.exports = router;