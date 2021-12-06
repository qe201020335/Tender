const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    favourites: [String],
    likes: [String],
    dislikes: [String]
});

const User = mongoose.model('User', UserSchema);
module.exports = { User };
