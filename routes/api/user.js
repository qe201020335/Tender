const express = require('express');
const router = express.Router();
const { ObjectID } = require('mongodb')
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

router.put('/user/favorites/:id', mongoChecker, async (req, res) => {
  // check valid id
	if (!ObjectID.isValid(req.params.id)) {
		res.status(404).send()
		return;
	}
	// find user by id
	try {
		const user = await User.findById(req.params.id)
		// if restaurant not found return 404
		if (!user) {
			res.status(404).send('Resource not found')
		} else {
      if(req.body.favourites) {
        user.favourites = req.body.favourites
      }
      if(req.body.likes) {
        user.likes = req.body.likes
      }
      if(req.body.dislikes) {
        user.dislikes = req.body.dislikes
      }
			// save restaurant to database
			await user.save()
			res.send({favourites: user.favourites, likes: user.likes, dislikes: user.dislikes})
		}
	} catch(error) {
		if (isMongoError(error)) {
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request')
		}
	}
})

module.exports = router;