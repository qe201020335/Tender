const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");

router.post('/login', mongoChecker, async (req, res) => {
	const email = req.body.email
  const password = req.body.password

  try {
    const user = await User.findByEmailPassword(email, password);
    if (!user) {
      //res.redirect('/login');
      res.status(404).send("wrong credentials")
    } else {
      req.session.user = user._id;
      req.session.email = user.email
      res.status(200).send({ user })
    }
  } catch (error) {
    if (isMongoError(error)) { 
      res.status(500)
    } else {
      console.log(error)
      res.status(404).send("wrong credentials")
    }
  }
});

module.exports = router;