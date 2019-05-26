const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users");

router.post("/login", function(req, res) {
  var isValid = false;
  try {
    isValid = usersController.validateUser(
      req.body.userName,
      req.body.password
    );
  } catch (error) {
    console.log(error);
  }
  if (isValid) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
