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

        var id = req.params.ID
        var result =  await model.getRecipeById(id)
        result.print()

        return res.render('recipe_detail.html', {
            app: pkg.appName,
            title: "Recetas",
            recipe: result
        })
    },

    async addRecipe(req, res) {

        return res.render('add_recipe.html', {
            app: pkg.appName,
            title: "Añadir receta"
        })
    },

    async getDocumentation(req, res) {

        return res.render('documentation.html', {
            app: pkg.appName,
            title: "Documentación"
        })
    },

    async getStatistics(req, res) {

        return res.render('statistics.html', {
            app: pkg.appName,
            title: "Estadísticas"
        })
    },

    async addIngredient(req, res) {

        return res.render('add_ingredient.html', {
            app: pkg.appName,
            title: "Añadir ingrediente"
        })
    },


    async addBook(req, res) {

        return res.render('add_book.html', {
            app: pkg.appName,
            title: "Añadir libro"
        })
    },


    async exportData(req, res) {

        var file =  await model.exportData()

        return res.download(file);
    }


}