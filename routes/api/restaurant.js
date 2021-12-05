const express = require('express');
const router = express.Router();
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

router.put('/restaurant', mongoChecker, async (req, res) => {
	try {
    const restaurant = new Restaurant({
      _id: req.body.id,
      name: req.body.name,
      image: req.body.image,
      address: req.body.address,
      description: req.body.description,
    })
		await restaurant.save()
		res.send({msg:"success"})
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