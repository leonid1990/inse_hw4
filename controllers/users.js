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

exports.getUserById = function(id) {
  return UserModel.getUserById(id);
};
exports.getUserByName = function(userName) {
  return UserModel.getUserByName(userName);
};
exports.getAllUsers = function() {
  return UserModel.getAllUsers();
};
exports.createUser = function(user) {
  UserModel.createUser(user);
};
