const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");

router.post('/api/users', mongoChecker, async (req, res) => {
	// Create a new user
	const user = new User({
		email: req.body.email,
		password: req.body.password
	})

	try {
		// Save the user
		const newUser = await user.save()
		res.send(newUser)
	} catch (error) {
		if (isMongoError(error)) {
			res.status(500).send('Internal server error')
		} else {
			log(error)
			res.status(400).send('Bad Request')
	}
})