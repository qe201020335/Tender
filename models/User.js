const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    userId: String,
    date: String,
    message: String
});

const LikeSchema = new mongoose.Schema({
    userId: String,
    date: String
});


const RestaurantSchema = new mongoose.Schema({
    name: String,
    image: String,
    address: String,
    description: String,
    comments: [CommentSchema],
    likes: [LikeSchema]
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    type: String,
    restaurant: RestaurantSchema,
    favourite: [RestaurantSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
