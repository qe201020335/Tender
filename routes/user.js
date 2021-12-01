const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");
const userTypes = ["USER", "RESTAURANT"]

router.post('/user', mongoChecker, async (req, res) => {
  if (req.body.userType === "ADMIN") {
    res.status(400).send('Bad Request')
    return
  }
  if (!userTypes.includes(req.body.userType)) {
    res.status(400).send('Bad Request')
    return
  }
	const user = new User({
		email: req.body.email,
		password: req.body.password,
    userType: req.body.userType
	})
	try {
		const newUser = await user.save()
		res.send(newUser)
	} catch (error) {
		if (isMongoError(error)) {
			res.status(500).send('Internal server error')
		} else {
			console.log(error)
			res.status(400).send('Bad Request')
    }
	}
})

module.exports = router;