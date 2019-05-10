const User = require("./User");

function Client(id, typeOfUser, userName, password, isVip) {
  User.call(this, id, typeOfUser, userName, password);

  this.isVip = isVip;
}

Client.prototype = Object.create(User.prototype);

Object.defineProperty(Client.prototype, "constructor", {
  value: Client,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

module.exports = Client;
