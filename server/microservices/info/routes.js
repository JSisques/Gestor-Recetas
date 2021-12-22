const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.get('/info', controller.getInfo)

module.exports = router