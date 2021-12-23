const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.get('/', controller.getAddRecipe) // Default
router.get('/addrecipe', controller.getAddRecipe)
router.get('/recipe/:ID', controller.getRecipeById)
router.get('/recipe', controller.getAllRecipes)
router.get('/add_recipe', controller.addRecipe)
router.get('/documentation', controller.getDocumentation)
router.get('/statistics', controller.getStatistics)

module.exports = router