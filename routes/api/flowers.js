const express = require("express");
const router = express.Router();

var controller = require("../../controllers/flowers.js");

// @route   GET api/flowers/test
// @desc    Tests flowers route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "flowers Works" }));

// @route   GET api/flowers
// @desc    Returns all flowers
// @access  Public
router.get("/", (req, res) => res.json(controller.getAllflowers()));

// @route   GET api/flowers/:flowerId
// @desc    Returns a flower by id
// @access  Public
router.get("/:flowerId", (req, res) => {
  var id = req.params.flowersId;
  res.send(controller.getflowerById(id));
});

// TODO
// @route   GET api/flowers/create/:flowerId
// @desc    Creates a flower
// @access  Public

module.exports = router;
