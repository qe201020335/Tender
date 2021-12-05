const express = require('express');
const router = express.Router();
const { Account } = require('../../models/Account');
const { mongoChecker, isMongoError } = require("../helpers/mongo_helpers");

router.post('/login', mongoChecker, async (req, res) => {
	const username = req.body.username
  const password = req.body.password

  try {
    const account = await Account.findByUsernamePassword(username, password);
    if (!account) {
      res.status(404).send("wrong credentials")
    } else {
      console.log(account)
      req.session.userId = account._id
      req.session.userType = account.userType
      res.status(200).send({ userId: account._id, userType: account.userType })
    }
  } catch (error) {
    if (isMongoError(error)) { 
      res.status(500)
    } else {
      console.log(error)
      res.status(404).send("wrong credentials")
    }
  }
});

module.exports = router;