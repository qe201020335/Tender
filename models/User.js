const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: String,
    favourite: [String],
    likes: [String],
    dislikes: [String]
});

const User = mongoose.model('User', UserSchema);
module.exports = { User };
