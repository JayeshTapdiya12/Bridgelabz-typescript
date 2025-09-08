// typeguard in typescript
// it is a technique used to narrow down the type of a variable within a conditional block.
// type of the typeguard :
// 1. typeof typeguard =only check primitive type like var , string , boolean etc;
// 2. instance of typeguard - check they type of class instance
// 3. custom typeguard  - to check the type of the interface;
var data = "jayesh";
data = 20;
if (typeof data === "string") {
    console.log("the type is string");
}
else if (typeof data === "number") {
    console.log("the type is number");
}
else {
    console.log("the type is boolean");
}
// for checking class instance
var Product21 = /** @class */ (function () {
    function Product21() {
    }
    return Product21;
}());
var p1 = new Product21();
var Order21 = /** @class */ (function () {
    function Order21() {
    }
    return Order21;
}());
var c1 = new Order21();
function checkClass(data) {
    if (data instanceof Product21) {
        console.log("the class is product");
    }
    else {
        console.log("the class is order");
    }
}
checkClass(p1);
checkClass(c1);
var userinfo22 = { name: "jayesh", age: 22 };
var userData22 = { email: "afa", address: "dfgdfg" };
function typechekcing(data) {
    if (data.email !== undefined) {
        console.log("this is user data");
    }
    else {
        console.log("this is user info");
    }
}
typechekcing(userinfo22);
