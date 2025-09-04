var _a;
var sym = Symbol("id");
var sym2 = Symbol();
console.log(sym == sym2);
// it used to create unique keys for object properties
var obj = (_a = {},
    _a[sym] = "value1",
    _a.name = "jayesh",
    _a);
console.log(obj[sym]);
