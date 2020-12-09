const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

let user = require('../models/user.model.js');


router.route('/').get((req, res) => {
    user.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/:email').get( async (req, res) => {
    user.findOne( {email: req.params.email }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/create').post((req, res, next) => {
    user.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/edit/:email').put( async (req, res) => {
    user.updateOne({email: req.params.email}, {$set: {school: req.body.school, diet: req.body.diet, bio: req.body.bio, img: req.body.img}}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/update/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

router.route('/:email').get( async (req, res) => {
    recipe.findOne( {_id: req.params.email }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})




module.exports = router;