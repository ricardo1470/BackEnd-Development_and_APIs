const express = require('express');
const router = express.Router();

const { getinit, getTimes, getTimestamp } = require('../controllers/init');

/* init */
router.get('/', getinit);

/* timestamp */
router.get('/api/', getTimes);
router.get('/api/:timestamp', getTimestamp);

module.exports = router;