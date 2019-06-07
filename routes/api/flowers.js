const express = require("express");
const router = express.Router();

var controller = require("../../controllers/users.js");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   GET api/users
// @desc    Returns all users
// @access  Public
router.get("/", (req, res) => res.json(controller.getAllUsers()));

// @route   GET api/users/:userId
// @desc    Returns a user by id
// @access  Public
router.get("/:userId", (req, res) => {
  var id = req.params.usersId;
  res.send(controller.getUserById(id));
});

// TODO
// @route   GET api/users/create/:userId
// @desc    Creates a user
// @access  Public

module.exports = router;
