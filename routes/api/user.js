const express = require('express');
const router = express.Router();
const { ObjectID } = require('mongodb')
const { User } = require('../../models/User');
const { Restaurant } = require('../../models/Restaurant');
const { mongoChecker, isMongoError } = require("../helpers/mongo_helpers");
const { authenticate } = require("../helpers/authentication");

router.put('/user/favourites/:id', mongoChecker, authenticate, async (req, res) => {
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

router.get('/user/favourites/:id', mongoChecker, authenticate, async (req, res) => {
  if (req.session.userType !== "admin" && req.session.userId !== req.params.id) {
    res.status(401).send("Unauthorized")
    return;
  }
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

router.post('/user/favourites/:id', mongoChecker, authenticate, async (req, res) => {
  if (req.session.userType !== "admin" && req.session.userId !== req.params.id) {
    res.status(401).send("Unauthorized")
    return;
  }
  // check valid id
	if (!ObjectID.isValid(req.params.id)) {
		res.status(404).send()
		return;
	}
	try {
    // add favorites to user table
		const user = await User.findById(req.params.id)
		if (!user) {
			res.status(404).send('Resource not found')
		} else {
      if(req.body.favourite) {
        user.favourites.push(req.body.favourite)
        // also record the favorite in restaurant table
        const restaurant = await Restaurant.findById(req.body.favourite)
        restaurant.favourites.push(req.params.id)
        await restaurant.save()
      }
      if(req.body.like) {
        user.likes.push(req.body.like)
        // also record the like in restaurant table
        const restaurant = await Restaurant.findById(req.body.like)
        restaurant.likes.push(req.params.id)
        await restaurant.save()
      }
      if(req.body.dislike) {
        user.dislikes.push(req.body.dislike)
        // also record the like in restaurant table
        const restaurant = await Restaurant.findById(req.body.dislike)
        restaurant.dislikes.push(req.params.id)
        await restaurant.save()
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

router.delete('/user/favourites/:id', mongoChecker, authenticate, async (req, res) => {
  if (req.session.userType !== "admin" && req.session.userId !== req.params.id) {
    res.status(401).send("Unauthorized")
    return;
  }
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
      if(req.body.favourite) {
        user.favourites.remove(req.body.favourite)
        // also remove the favorite in restaurant table
        const restaurant = await Restaurant.findById(req.body.favourite)
        restaurant.favourites.remove(req.params.id)
        await restaurant.save()
      }
      if(req.body.like) {
        user.likes.remove(req.body.like)
        // also remove the like in restaurant table
        const restaurant = await Restaurant.findById(req.body.dislike)
        restaurant.dislikes.remove(req.params.id)
        await restaurant.save()
      }
      if(req.body.dislike) {
        user.dislikes.remove(req.body.dislike)
        // also record the like in restaurant table
        const restaurant = await Restaurant.findById(req.body.dislike)
        restaurant.dislikes.remove(req.params.id)
        await restaurant.save()
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