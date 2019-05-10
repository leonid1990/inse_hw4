const Employee = require("./Employee");

function Manager(
  id,
  typeOfUser,
  userName,
  password,
  branchId,
  responsibilities
) {
  Employee.call(this, id, typeOfUser, userName, password, branchId);

  this.responsibilities = responsibilities;
}

Manager.prototype = Object.create(Employee.prototype);
Object.defineProperty(Manager.prototype, "constructor", {
  value: Manager,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

module.exports = Manager;
