var _a;
var msg = "Hello, TypeScript!";
console.log(msg);
var uniqueKey = Symbol("description");
var obj = (_a = {},
    _a[uniqueKey] = "this is the qunique property",
    _a);
console.log(obj[uniqueKey]);
