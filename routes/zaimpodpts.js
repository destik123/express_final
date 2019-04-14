const express = require('express');
const router = express.Router();

const zaimpodpts = require('../controllers/zaimpodpts');

/* GET home page. */
router.get('/', zaimpodpts.get_zaimpodpts);

module.exports = router;