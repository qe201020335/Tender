const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    userId: String,
    date: String,
    message: String
});

const RestaurantSchema = new mongoose.Schema({
    name: String,
    image: String,
    address: String,
    description: String,
    comments: [CommentSchema],
    likes: [String],
    dislikes: [String]
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    type: String,
    restaurant: { type: [RestaurantSchema], index: true },
    favourite: [String],
    likes: [String],
    dislikes: [String]
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
