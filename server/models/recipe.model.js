const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let recipeSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    estimateTime: {type: String},
    ingredients: {type: String, required: true},
    instructions: {type: String, required: true},
    date: {type: Date, default: Date.now()}
}, 
    {collection: 'recipes'}
)

module.exports = mongoose.model("Recipe", recipeSchema);