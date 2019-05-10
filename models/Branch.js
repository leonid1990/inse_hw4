exports.Branch = function(id, address, isActive) {
  this.id = id;
  this.address = address;
  this.isActive = isActive;
};

var allBranchesData = require("../data").branches;

function serializeBranch(singleBranchObj) {
  return JSON.stringify(singleBranchObj);
}

function deSerializeBranch(singleBranchData) {
  var branchObj = new Branch(
    singleBranchData.id,
    singleBranchData.address,
    singleBranchData.isActive
  );

  return branchObj;
}

exports.getBranchById = function(id) {
  return deSerializeBranch(allBranchesData.find(branch => branch.id === id));
};

exports.getAllBranches = function() {
  return allBranchesData.map(deSerializeBranch(singleBranchData));
};
exports.createBranch = function(branch) {
  if (getBranchById(branch.id)) {
    throw "Branch already exists";
  } else {
    allBranchesData.push(serializeBranch(branch));
  }
};
