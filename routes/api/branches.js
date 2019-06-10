const express = require("express");
const router = express.Router();

var controller = require("../../controllers/branches.js");

// @route   POST api/branches/test
// @desc    Tests branches route
// @access  Private
router.get("/test", (req, res) => res.json({ msg: "Branches Works" }));

// @route   POST api/branches
// @desc    Returns all branches
// @access  Private
router.get("/", (req, res) => res.json(controller.getAllBranches()));

// @route   POST api/branches/:branchId
// @desc    Returns a branch by id
// @access  Private
router.get("/:branchId", (req, res) => {
  var id = Number(req.params.branchId);
  res.send(controller.getBranchById(id));
});

// @route   POST api/branches/create/:branchId
// @desc    Creates a branch
// @access  Private
/* router.get("/create/:branchId", (req, res) => {
  var branch = {
    id: req.params.branchId,
    address: req.params.address,
    isActive: req.params.isActive
  };

  try {
    controller.createBranch(branch);
    res.sendStatus(201);
  } catch (err) {
    console.log(err.msg);
    res.sendStatus(400);
  }
}); */

module.exports = router;
