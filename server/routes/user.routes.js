const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");


router.post('/', (req, res) => {
    const {email, username} = req.body;
    if (!username) {
        return res.status(422).json({error:"please add all fields"})
    }
    const newUser = new User({
        username,
        email
    });
    newUser.save().then(user => {
        res.redirect('./EditProfile')
    }).catch(err => {
        console.log(err);
    });
});



module.exports = router;