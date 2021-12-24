const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.get('/book', controller.getAllBooks)
router.post('/book', controller.saveBook)
router.get('/book/:ID', controller.getBookById)
router.put('/book', controller.updateBook)

module.exports = router