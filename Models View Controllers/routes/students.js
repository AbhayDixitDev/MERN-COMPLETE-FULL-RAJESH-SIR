const router = require('express').Router();
const stuControllers = require('../controllers/stuControllers');

router.get('/about', stuControllers.about);


module.exports = router;