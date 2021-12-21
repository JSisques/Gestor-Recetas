const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.get('/recipe', controller.getAllRecipes)
router.post('/recipe', controller.saveRecipe)
router.get('/recipe/:ID', controller.getRecipeById)
router.put('/recipe', controller.updateRecipe)

module.exports = router