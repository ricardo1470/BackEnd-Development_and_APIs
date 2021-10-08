const express = require('express');
const router = express.Router();

const { getinit, getTimes, getTimestamp } = require('../controllers/init');

/* init */
router.get('/', getinit);

/* timestamp */
router.get('/api/timestamp/', getTimes);
router.get('/api/timestamp/:timestamp', getTimestamp);

module.exports = router;