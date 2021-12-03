const express = require('express');
const router = express.Router();
const { UserCredential } = require('../models/userCredential');
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");

router.post('/login', mongoChecker, async (req, res) => {
	const username = req.body.username
  const password = req.body.password

  try {
    const user = await UserCredential.findByUsernamePassword(username, password);
    if (!user) {
      //res.redirect('/login');
      res.status(404).send("wrong credentials")
    } else {
      console.log(user)
      req.session.user = user
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