function Flower(id, name, color, image, cost) {
  this.id = id;
  this.name = name;
  this.color = color;
  this.image = image;
  this.cost = cost;
}
var allFlowersData = require("../../data").flowers;

function serializeFlower(singleFlowerObj) {
  return JSON.stringify(singleFlowerObj);
}

function deSerializeFlower(singleFlowerData) {
  var flowerObj = new Flower(
    singleFlowerData.id,
    singleFlowerData.name,
    singleFlowerData.color,
    singleFlowerData.image,
    singleFlowerData.cost
  );

  return flowerObj;
}
exports.getFlowerById = function(id) {
  return deSerializeFlower(allFlowersData.find(flower => flower.id === id));
};
exports.getFlowerByName = function(flowerName) {
  return deSerializeFlower(
    allFlowersData.find(flower => flower.name === flowerName)
  );
};
exports.getAllFlowers = function() {
  return allFlowersData.map(singleFlowerData =>
    deSerializeFlower(singleFlowerData)
  );
};
exports.createFlower = function(flower) {
  if (getFlowerById(flower.id)) {
    throw "Flower already exists";
  } else {
    allFlowersData.push(serializeFlower(flower));
  }
};
