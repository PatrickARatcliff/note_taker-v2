const express = require('express');
const router = express.Router();
const api = require('./api');

// currently at root level '/'
router.use('/api', api);

module.exports = router;