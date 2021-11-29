const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    userId: String,
    date: String,
    message: String
});

const RestaurantSchema = new mongoose.Schema({
    username: username,
    password: password,
    name: String,
    image: String,
    address: String,
    description: String,
    comments: [CommentSchema]
});

const Restaurant = mongoose.model('restaurant', RestaurantSchema);

module.exports = { Restaurant };
