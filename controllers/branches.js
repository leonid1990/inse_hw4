var BranchModel = require("../models/Branch");

exports.getBranchById = function(id) {
  return BranchModel.getBranchById(id);
};

exports.getAllBranches = function() {
  return BranchModel.getAllBranches();
};

exports.createBranch = function(branch) {
  BranchModel.createBranch(branch);
};
