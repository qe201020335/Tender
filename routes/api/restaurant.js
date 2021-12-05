const express = require('express');
const router = express.Router();
const { Restaurant } = require('../../models/Restaurant');
const { mongoChecker, isMongoError } = require("../helpers/mongo_helpers");

router.get('/restaurant', mongoChecker, async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    if (!restaurants) {
      res.status(500)
    } else {
      res.send(restaurants)
    }
  } catch (error) {
    if (isMongoError(error)) { 
      res.status(500)
    } else {
      console.log(error)
      res.status(500).send("server error")
    }
  }
})

module.exports = router;