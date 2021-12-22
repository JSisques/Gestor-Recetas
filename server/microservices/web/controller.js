const pkg = require('../../../package.json')
const model = require('./model')
const constants = require('../../util/constants')

module.exports = {

    async getAddRecipe(req, res) {

        return res.render('index.html', {
            app: pkg.appName,
            title: "Añadir recetas",
        })
    },

    async getAllRecipes(req, res) {

        var result =  await model.getAllRecipes()

        return res.render('recipes.html', {
            app: pkg.appName,
            title: "Recetas",
            recipes: result
        })
    },

    async getRecipeById(req, res) {

        var result =  await model.getRecipeById(1)
        result.print()

        return res.render('recipe_detail.html', {
            app: pkg.appName,
            title: "Recetas",
            recipe: result
        })
    }
}