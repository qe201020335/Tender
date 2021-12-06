const express = require('express');
const router = express.Router();
const { ObjectID } = require('mongodb')
const { Restaurant } = require('../../models/Restaurant');
const { mongoChecker, isMongoError } = require("../helpers/mongo_helpers");

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

router.put('/restaurant/:id', mongoChecker, async (req, res) => {
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

router.put('/restaurant/favorites/:id', mongoChecker, async (req, res) => {
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

router.put('/restaurant/comments/:id', mongoChecker, async (req, res) => {
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
      if(req.body.comments) {
        restaurant.comments = req.body.comments
      }
			// save restaurant to database
			await restaurant.save()
			res.send({comments: restaurant.comments})
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