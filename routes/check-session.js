const express = require('express');
const router = express.Router();

router.get("/check-session", (req, res) => {
  // if (env !== 'PROD' && USE_TEST_USER) {
  //     req.session.user = TEST_USER_ID;
  //     req.session.email = TEST_USER_EMAIL;
  //     res.send({ currentUser: TEST_USER_EMAIL })
  //     return;
  // }
  if (req.session.user) {
    console.log(req.session.user)
    res.send({ user: req.session.user });
  } else {
    res.status(401).send();
  }
});

module.exports = router;