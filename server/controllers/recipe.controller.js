import mongoose from "mongoose";
import recipeModel from "../models/recipe.model.js";

export const add = (req, res) => {
    let postData = req.body;
    const newRecipe = new recipeModel({
        title: postData
    });
}