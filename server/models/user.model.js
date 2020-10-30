const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true}
});

module.exports = userSchema = mongoose.model("user", userSchema);