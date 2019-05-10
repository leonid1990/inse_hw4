const User = require("./User");

function Employee(id, typeOfUser, userName, password, branchId) {
  User.call(this, id, typeOfUser, userName, password);

  this.branchId = branchId;
}

Employee.prototype = Object.create(User.prototype);

Object.defineProperty(Employee.prototype, "constructor", {
  value: Employee,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

module.exports = Employee;
