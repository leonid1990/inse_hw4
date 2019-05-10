const User = require("./User");

function Supplier(id, typeOfUser, userName, password, region) {
  User.call(this, id, typeOfUser, userName, password);

  this.region = region;
}

Supplier.prototype = Object.create(User.prototype);

Object.defineProperty(Supplier.prototype, "constructor", {
  value: Supplier,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

module.exports = Supplier;
