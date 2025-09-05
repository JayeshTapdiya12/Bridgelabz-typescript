// An enum is a special "class" that represents a group of constants (unchangeable variables).

// means a set of values we can define in a objesct and only that value is used or get assifned , other than those value it will give the error;

enum whoType {
  student = "student",
  teacher = "teacher",
  admin = "admin",
}

var who: whoType = whoType.student;
console.log(who);
// var who1: whoType = "employee"; // it will give the error because we have not defined this value in enum

console.log(whoType);

// role based access
enum Role {
  admin,
  readOnly,
  author,
}
console.log(Role.admin);
