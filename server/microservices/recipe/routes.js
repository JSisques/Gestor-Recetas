const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.get('/recipe', controller.getAllRecipes)
router.post('/recipe', controller.saveRecipe)
router.get('/recipe/:ID', controller.getRecipe)

module.exports = router