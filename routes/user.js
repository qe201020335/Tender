const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");
const userTypes = ["ADMIN", "USER", "RESTAURANT"]

router.post('/', mongoChecker, async (req, res) => {

  if (!userTypes.includes(req.body.userType)) {
		console.log("missing usertype")
    res.status(400).send('Bad Request')
    return
  }
	const user = new User({
		username: req.body.username,
		password: req.body.password,
    userType: req.body.userType
	})
})

module.exports = router;