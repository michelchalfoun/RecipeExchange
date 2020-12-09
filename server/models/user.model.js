const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, trim: true, unique: true},
    bio: {type: String, default: ''},
    school: {type: String, default: ''},
    diet: {type: String, default: ''},
    favorites: [String],
    img: {type: String, default: "https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png"}
},
    {collection: 'users'}
)

module.exports = mongoose.model("User", userSchema);