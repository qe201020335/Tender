const express = require('express');
const router = express.Router();
const { User } = require('../../models/User');
const { mongoChecker, isMongoError } = require("../helpers/mongo_helpers");

router.get('/user', mongoChecker, async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      res.status(500).send("server error")
    } else {
      res.send(user)
    }
  } catch (error) {
    if (isMongoError(error)) { 
      res.status(500).send("database error")
    } else {
      console.log(error)
      res.status(500).send("server error")
    }
  }
})

module.exports = router;