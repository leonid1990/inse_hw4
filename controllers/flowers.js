var FlowerModel = require("../models/Flower");

exports.getFlowerById = function(id) {
  return FlowerModel.getFlowerById(id);
};
exports.getFlowerByName = function(flowerName) {
  return FlowerModel.getFlowerByName(flowerName);
};
exports.getAllFlowers = function() {
  return FlowerModel.getAllFlowers();
};
exports.createFlower = function(flower) {
  FlowerModel.createFlower(flower);
};
