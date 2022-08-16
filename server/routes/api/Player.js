const router = require('express').Router();
const { User } = require('../../models');

//get user
router.get('/', (req, res) => {
    console.log('hit');
    res.status(200).send({ message: 'All clear' });
})



module.exports = router;