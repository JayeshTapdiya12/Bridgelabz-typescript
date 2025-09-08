//  inheritance in typescript means one class can inherit the properties and methods of another class using extends keyword.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.login = function (name, pass) {
        if (name && pass) {
            console.log("login successfully");
        }
        else {
            console.log("login failed");
        }
    };
    return Auth;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    student.prototype.result = function (marks) {
        if (marks >= 35) {
            console.log("student is pass");
        }
        else {
            console.log("fail");
        }
    };
    return student;
}(Auth));
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    teacher.prototype.subject = function (sub) {
        console.log("he teahces " + sub);
    };
    return teacher;
}(Auth));
var s1 = new student();
console.log(s1.login("jayesh", 1234));
console.log(s1.result(45));
var t1 = new teacher();
console.log(t1.login("jayesh", 1234));
console.log(t1.subject("maths"));
