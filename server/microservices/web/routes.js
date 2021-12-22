const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.get('/', controller.getAddRecipe) // Default
router.get('/addrecipe', controller.getAddRecipe)
router.get('/recipe/:ID', controller.getRecipeById)
router.get('/recipe', controller.getAllRecipes)

module.exports = router