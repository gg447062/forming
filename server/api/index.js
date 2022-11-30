const express = require('express');
const router = express.Router();

router.use('/rsvp', require('./rsvp'));
router.use('/submit', require('./submit'));

module.exports = router;
