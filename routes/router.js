const express = require("express");
const flowersRouter = require("../routes/api/flowers");
const usersController = require("../controllers/users");

const router = express.Router();

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

router.use(
  "/api/",
  function(req, res, next) {
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
      next();
    } else {
      res.sendStatus(401);
    }
  },
  function(req, res, next) {
    setTimeout(function() {
      next();
    }, 1000);
  }
);

router.use("/api/flowers", flowersRouter);

module.exports = router;
