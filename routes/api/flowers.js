const express = require("express");
const router = express.Router();

var controller = require("../../controllers/flowers");

// @route   POST api/flowers/test
// @desc    Tests flowers route
// @access  Private
router.post("/test", (req, res) => res.json({ msg: "Flowers Works" }));

// @route   POST api/flowers
// @desc    Returns all flowers
// @access  Private
router.post("/", controller.getAllFlowers);

// @route   POST api/flowers/:flowerId
// @desc    Returns a flower by id
// @access  Private
router.post("/:flowerId", controller.getFlowerById);

// TODO
// @route   POST api/flowers/create/:flowerId
// @desc    Creates a flower
// @access  Private

module.exports = router;
