const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, trim: true}
},
    {collection: 'users'}
)

module.exports = mongoose.model("User", userSchema);