const express = require('express');
const router = express.Router();
const { Account } = require('../../models/Account');
const { User } = require('../../models/User');
const { Restaurant } = require('../../models/Restaurant');
const { mongoChecker, isMongoError } = require("../helpers/mongo_helpers");
const userTypes = ["ADMIN", "USER", "RESTAURANT"]

router.post('/signup', mongoChecker, async (req, res) => {
  // if (req.body.userType === "ADMIN") {
  //   res.status(400).send('Bad Request')
  //   return
  // }
  if (!userTypes.includes(req.body.userType)) {
    res.status(400).send('Bad Request missing usertype')
    return
  }
	const account = new Account({
		username: req.body.username,
		password: req.body.password,
    userType: req.body.userType
	})
	try {
		const newAccount = await account.save()
		// create user profile
		if(newAccount.userType === "USER" || newAccount.userType === "ADMIN") {
			const user = new User({
				_id: newAccount._id
			})
			await user.save()
		}
		// create restaurant profile
		if (newAccount.userType === "RESTAURANT" || newAccount.userType === "ADMIN") {
			const restaurant = new Restaurant({
				_id: newAccount._id
			})
			await restaurant.save()
		}
		req.session.userId = newAccount._id
		req.session.userType = newAccount.userType
		res.send({ userId: newAccount._id, userType: newAccount.userType })
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