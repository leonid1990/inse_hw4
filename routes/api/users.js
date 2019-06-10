const express = require("express");
const router = express.Router();

var controller = require("../../controllers/users.js");

// @route   POST api/users/test
// @desc    Tests users route
// @access  Private
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   POST api/users
// @desc    Returns all users
// @access  Private
router.get("/", (req, res) => res.json(controller.getAllUsers()));

// @route   POST api/users/:userId
// @desc    Returns a user by id
// @access  Private
router.get("/:userId", (req, res) => {
  var id = Number(req.params.usersId);
  res.send(controller.getUserById(id));
});

// TODO
// @route   POST api/users/create/:userId
// @desc    Creates a user
// @access  Private

module.exports = router;
