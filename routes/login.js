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
      res.status(200).send(user)
        // req.session.user = user._id;
        // req.session.email = user.email
        // res.redirect('/dashboard');
    }
  } catch (error) {
    if (isMongoError(error)) { 
      res.status(500)
      //res.status(500).redirect('/login');
    } else {
      console.log(error)
      res.status(404).send("wrong credentials")
      //res.status(400).redirect('/login');
    }
  }
});

module.exports = router;