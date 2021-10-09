const express = require('express');
const router = express.Router();

const { getinit, getHeaders } = require('../controllers/init');

/* init */
router.get('/', getinit);

/* timestamp */
router.get('/api/whoami', getHeaders);

module.exports = router;