const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let recipeSchema = new Schema({
    title: { type: String, required: true, unique: true},
    description: { type: String },
    estimateTime: { type: String },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    author: { type: String, required: true },
    authorUsername: {type: String, required: true}
},
    { collection: 'recipes' }
)

module.exports = mongoose.model("Recipe", recipeSchema);