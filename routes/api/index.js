const express = require('express');
const router = express.Router();
const db = require('./db');

// currently at /api
router.use('/db', db);

module.exports = router;