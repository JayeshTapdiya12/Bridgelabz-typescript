// namespace :provide a powerful way to organize code and prevent naming conflicts by creating a container for related functionality.
// means we are  grouping the the function and classs and all the things
var userNameSpace;
(function (userNameSpace) {
    var Auth = /** @class */ (function () {
        function Auth() {
        }
        Auth.prototype.login = function () {
            console.log("logged in");
        };
        return Auth;
    }());
    userNameSpace.Auth = Auth;
    function getList() {
        console.log("list of the user");
    }
    userNameSpace.getList = getList;
})(userNameSpace || (userNameSpace = {}));
var user99 = new userNameSpace.Auth();
user99.login();
var Admin;
(function (Admin) {
    var Auth = /** @class */ (function () {
        function Auth() {
        }
        Auth.prototype.login = function () {
            console.log("logged in");
        };
        return Auth;
    }());
    Admin.Auth = Auth;
    function getList() {
        console.log("list of the user");
    }
    Admin.getList = getList;
})(Admin || (Admin = {}));
