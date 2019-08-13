var UserModel = require("../models/users/User");

exports.validateUser = function(userName, password) {
  try {
    var user = UserModel.getUserByName(userName);
  } catch (error) {
    throw error;
  }
  if (user.password === password) {
    return true;
  } else {
    return false;
  }
};

exports.getUserById = (req, res) => {
  var id = Number(req.params.usersId);
  res.send(UserModel.getUserById(id));
};
exports.getUserByName = function(userName) {
  return UserModel.getUserByName(userName);
};
exports.getAllUsers = (req, res) => res.json(UserModel.getAllUsers());
exports.createUser = function(user) {
  UserModel.createUser(user);
};
