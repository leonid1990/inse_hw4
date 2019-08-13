var FlowerModel = require("../models/Flower");

exports.getFlowerById = (req, res) => {
  var id = Number(req.params.flowerId);
  res.send(FlowerModel.getFlowerById(id));
};

// exports.getFlowerByName = function(flowerName) {
//   return FlowerModel.getFlowerByName(flowerName);
// };
exports.getAllFlowers = (req, res) => res.json(FlowerModel.getAllFlowers());

// exports.createFlower = function(flower) {
//   FlowerModel.createFlower(flower);
// };
