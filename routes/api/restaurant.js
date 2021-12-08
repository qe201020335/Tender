const express = require('express');
const router = express.Router();
const { ObjectID } = require('mongodb')
const { Restaurant } = require('../../models/Restaurant');
const { mongoChecker, isMongoError } = require("../helpers/mongo_helpers");
const { authenticate } = require("../helpers/authentication");

router.get('/restaurant', mongoChecker, async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    if (!restaurants) {
      res.status(500).send("server error")
    } else {
      res.send(restaurants)
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

router.get('/restaurant/:id', mongoChecker, async (req, res) => {
  // check valid id
	if (!ObjectID.isValid(req.params.id)) {
		res.status(404).send()
		return;
	}
	try {
    let restaurant = await Restaurant.findById(req.params.id)
		// if restaurant not found return 404
		if (!restaurant) {
      res.status(404).send()
		} else {
      res.send(restaurant)
    }
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

router.put('/restaurant/:id', mongoChecker, authenticate, async (req, res) => {
	console.log(req.session.userType)
	if (req.session.userType !== "ADMIN" && req.session.userId !== req.params.id) {
    res.status(401).send("Unauthorized")
    return;
  }
  // check valid id
	if (!ObjectID.isValid(req.params.id)) {
		res.status(404).send()
		return;
	}
	try {
    let restaurant = await Restaurant.findById(req.params.id)
		// if restaurant not found return 404
		if (!restaurant) {
      const restaurant = new Restaurant({
        _id: req.params.id,
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        image: req.body.image,
        description: req.body.description
      })
      await restaurant.save()
		} else {
      restaurant.name = req.body.name;
      restaurant.address = req.body.address;
      restaurant.phoneNumber = req.body.phoneNumber;
      restaurant.image = req.body.image;
      restaurant.description = req.body.description;
      await restaurant.save()
    }
    res.send(restaurant)
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

router.put('/restaurant/favorites/:id', mongoChecker, authenticate, async (req, res) => {
  // check valid id
	if (!ObjectID.isValid(req.params.id)) {
		res.status(404).send()
		return;
	}
	// find user by id
	try {
		const restaurant = await Restaurant.findById(req.params.id)
		// if restaurant not found return 404
		if (!restaurant) {
			res.status(404).send('Resource not found')
		} else {
      if(req.body.favourites) {
        restaurant.favourites = req.body.favourites
      }
      if(req.body.likes) {
        restaurant.likes = req.body.likes
      }
      if(req.body.dislikes) {
        restaurant.dislikes = req.body.dislikes
      }
			// save restaurant to database
			await restaurant.save()
			res.send({favourites: restaurant.favourites, likes: restaurant.likes, dislikes: restaurant.dislikes})
		}
	} catch(error) {
		if (isMongoError(error)) {
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request')
		}
	}
})

router.post('/restaurant/comments/:id', mongoChecker, authenticate, async (req, res) => {
  // check valid id
	if (!ObjectID.isValid(req.params.id)) {
		res.status(404).send()
		return;
	}
	// find user by id
	try {
		const restaurant = await Restaurant.findById(req.params.id)
		// if restaurant not found return 404
		if (!restaurant) {
			res.status(404).send('Resource not found')
		} else {
      if(req.body) {
        restaurant.comments.push(req.body)
      }
			// save restaurant to database
			await restaurant.save()
			res.send(restaurant.comments)
		}
	} catch(error) {
		if (isMongoError(error)) {
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request')
		}
	}
})

router.delete('/restaurant/comments/:id', mongoChecker, authenticate, async (req, res) => {
	// check valid id
	if (!ObjectID.isValid(req.params.id)) {
		res.status(404).send("invalid id")
		return;
	}
	// find restaurant by id
	try {
		const restaurant = await Restaurant.findById(req.params.id)
		// if restaurant not found return 404
		if (!restaurant) {
			res.status(404).send('Resource not found')
		} else {
			if (req.body.commentId){
				const comment = restaurant.comments.id(req.body.commentId)
				if(comment) {
					// remove the reservation
					comment.remove()
					// save restaurant to database
					await restaurant.save()
					res.send(restaurant.comments)
				} else {
					res.status(404).send('comment not found')
				}
			}

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