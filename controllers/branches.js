var BranchModel = require("../models/Branch");

exports.getBranchById = (req, res) => {
  var id = Number(req.params.branchId);
  res.json(BranchModel.getBranchById(id));
};

exports.getAllBranches = (req, res) => res.json(BranchModel.getAllBranches());

// exports.createBranch = function(branch) {
//   BranchModel.createBranch(branch);
// };
