const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Recipe = mongoose.model("Recipe");

router.post('/', (req, res) => {
    const {title, body, cooktime} = req.body;
    if (!title) {
        return res.status(422).json({error:"please add all fields"})
    }
    res.json({message:"successfully posted"});
    const recipe = new Recipe({
        title,
        body,
        cooktime
    });
    recipe.save().then(user => {
        res.json({message: "saved recipe"})
    }).catch(err => {
        console.log(err);
    });
});
  
module.exports = router;