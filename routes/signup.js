const express = require('express');
const router = express.Router();
const { UserCredential } = require('../models/userCredential');
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");
const userTypes = ["ADMIN", "USER", "RESTAURANT"]

router.post('/signup', mongoChecker, async (req, res) => {
  // if (req.body.userType === "ADMIN") {
  //   res.status(400).send('Bad Request')
  //   return
  // }
  if (!userTypes.includes(req.body.userType)) {
		console.log("missing usertype")
    res.status(400).send('Bad Request')
    return
  }
	const userCredential = new UserCredential({
		username: req.body.username,
		password: req.body.password,
    userType: req.body.userType
	})
	try {
		const newUser = await userCredential.save()
		res.send(newUser)
	} catch (error) {
		console.log(error)
		if (isMongoError(error)) {
			res.status(500).send('Internal server error')
		} else {
			console.log(error)
			res.status(400).send('Bad Request')
    }
	}
})

module.exports = router;