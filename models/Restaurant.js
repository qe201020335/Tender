const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  userId: String,
  username: String,
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

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = { Restaurant };