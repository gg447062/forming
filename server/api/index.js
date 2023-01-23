const express = require('express');
const router = express.Router();

router.use('/rsvp', require('./rsvp'));
router.use('/submit', require('./submit'));
router.use('/data', require('./data'));

module.exports = router;
