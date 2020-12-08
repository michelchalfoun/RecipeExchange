const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

let recipe = require('../models/recipe.model.js');

router.route('/').get((req, res) => {
    recipe.find({}, (err, data) => {
        if (err)
          return res.status(200).send({
            message: err.message || "An unknown error occurred",
          });
        res.json(data);
      });
})

router.route('/search/:keyword').get((req, res) => {
    recipe.find({$or:[
        {title : {'$regex': req.params.keyword, $options:'i'}},
        {author : {'$regex' : req.params.keyword, $options:'i'}},
        {authorUsername : {'$regex' : req.params.keyword, $options:'i'}},
        {description : {'$regex' : req.params.keyword, $options:'i'}},
        {ingredients : {'$regex' : req.params.keyword, $options:'i'}},
        {instructions : {'$regex' : req.params.keyword, $options:'i'}},
        {estimateTime : {'$regex' : req.params.keyword, $options:'i'}}
    ]}, (err, data) => {
        if (err)
          return res.status(200).send({
            message: err.message || "An unknown error occurred",
          });
        res.json(data);
      });
})

router.route('/create').post((req, res, next) => {
    recipe.create(req.body, (error, data) => {
        if (error) {

            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/edit/:id').get((req, res) => {
    recipe.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/update/:id').put((req, res, next) => {
    recipe.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Post updated successfully !')
        }
    })
})

router.route('/delete/:id').delete((req, res, next) => {
    recipe.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

router.route('/:postID').get( async (req, res) => {
    recipe.findOne( {_id: req.params.postID }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

  

module.exports = router;
