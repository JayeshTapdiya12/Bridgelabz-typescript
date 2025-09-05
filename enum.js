// An enum is a special "class" that represents a group of constants (unchangeable variables).
// means a set of values we can define in a objesct and only that value is used or get assifned , other than those value it will give the error;
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["admin"] = "admin";
})(whoType || (whoType = {}));
var who = whoType.student;
console.log(who);
// var who1: whoType = "employee"; // it will give the error because we have not defined this value in enum
console.log(whoType);
// role based access
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["readOnly"] = 1] = "readOnly";
    Role[Role["author"] = 2] = "author";
})(Role || (Role = {}));
console.log(Role.admin);
