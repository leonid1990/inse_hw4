exports.branches = [
  { id: 1, address: "Ramot", isActive: true },
  { id: 2, address: "Gilo", isActive: false }
];

exports.flowers = [];

exports.users = [
  {
    id: 1,
    typeOfUser: "Manager",
    userName: "arye",
    password: "1234",
    branchId: "Ramot",
    responsibilities: "general"
  },
  {
    id: 2,
    typeOfUser: "Employee",
    userName: "reuven",
    password: "2222",
    branchId: "Ramot"
  },
  {
    id: 3,
    typeOfUser: "Employee",
    userName: "shimon",
    password: "3333",
    branchId: "Ramot"
  },
  {
    id: 4,
    typeOfUser: "Client",
    userName: "avraham",
    password: "4444",
    isVip: "true"
  },
  {
    id: 5,
    typeOfUser: "Client",
    userName: "yitzhak",
    password: "5555",
    isVip: "true"
  }
];
