const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.get('/ingredient', controller.getAllIngredients)
router.post('/ingredient', controller.saveIngredient)
router.get('/ingredient/:ID', controller.getIngredientById)
router.put('/ingredient', controller.updateIngredient)

module.exports = router