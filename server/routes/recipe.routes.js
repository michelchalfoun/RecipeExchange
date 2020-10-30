const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Recipe = mongoose.model("Recipe");

router.post('/', (req, res) => {
    const {title, body, cooktime, ingredients, instructions} = req.body;
    if (!title) {
        return res.status(422).json({error:"please add all fields"})
    }
    const recipe = new Recipe({
        title,
        body,
        cooktime,
        ingredients,
        instructions
    });
    recipe.save().then(user => {
        res.redirect('./Home')
    }).catch(err => {
        console.log(err);
    });
});


  
module.exports = router;