const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String},
    cooktime: {type: Number},
    ingredients: {type: String},
    instructions: {type: String},
    date: {type: Date, default: Date.now()}
});

mongoose.model("Recipe", recipeSchema);