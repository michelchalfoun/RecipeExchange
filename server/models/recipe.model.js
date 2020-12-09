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
    authorUsername: {type: String, required: true},
    favorited: { type: Number, min: 0, default: 0},
    img: {type: String, default: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/oatmeal.jpg"}
},
    { collection: 'recipes' }
)

module.exports = mongoose.model("Recipe", recipeSchema);