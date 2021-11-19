const express = require('express');
const router = express.Router();

const { getinit, getUrl } = require('../controllers/init');

/* init */
router.get('/', getinit);

/* timestamp */
router.post('/api/shorturl/new', getUrl);

module.exports = router;