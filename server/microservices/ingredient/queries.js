module.exports = Object.freeze({
    INSERT_INGREDIENT: "INSERT INGREDIENT (NAME) VALUES(?)",
    SELECT_ALL_INGREDIENTS: "SELECT * FROM INGREDIENT",
    UPDATE_INGREDIENT: "UPDATE INGREDIENT SET NAME = ? WHERE ID = ?",
    SELECT_INGREDIENT_BY_ID: "SELECT * FROM INGREDIENT WHERE ID = ?"
});