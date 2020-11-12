const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, trim: true, unique: true},
    bio: {type: String, default: ''},
    school: {type: String, default: ''},
    diet: {type: String, default: ''}
},
    {collection: 'users'}
)

module.exports = mongoose.model("User", userSchema);