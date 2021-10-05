const express = require('express');
const router = express.Router();

const { getinit, getTimestamp } = require('../controllers/init');

/* init */
router.get('/', getinit);

/* timestamp */
router.get('/now', getTimestamp);

module.exports = router;