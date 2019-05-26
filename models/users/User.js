function User(id, typeOfUser, userName, password) {
  this.id = id;
  this.typeOfUser = typeOfUser;
  this.userName = userName;
  this.password = password;
}

var allUsersData = require("../../data").users;

function serializeUser(singleUserObj) {
  return JSON.stringify(singleUserObj);
}

function deSerializeUser(singleUserData) {
  var userObj = new User(
    singleUserData.id,
    singleUserData.typeOfUser,
    singleUserData.userName,
    singleUserData.password
  );

  return userObj;
}
exports.getUserById = function(id) {
  return deSerializeUser(allUsersData.find(user => user.id === id));
};
exports.getUserByName = function(userName) {
  return deSerializeUser(allUsersData.find(user => user.userName === userName));
};
exports.getAllUsers = function() {
  return allUsersData.map(singleUserData => deSerializeUser(singleUserData));
};
exports.createUser = function(user) {
  if (getUserById(user.id)) {
    throw "User already exists";
  } else {
    allUsersData.push(serializeUser(user));
  }
};
