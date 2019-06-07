const express = require("express");
const router = express.Router();

var controller = require("../../controllers/users.js");
var User = require("../../models/users/User");

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

// @route   GET api/users/create/:userId
// @desc    Creates a user
// @access  Public
/* router.get("/create/:userId", (req, res) => {
  // var id = req.params.branchId;
  // var address = req.params.address;
  // var isActive = req.params.isActive;
  // var newBranch = Branch(id, address, isActive);
  // controller.createBranch(newBranch);
}); */

module.exports = router;
