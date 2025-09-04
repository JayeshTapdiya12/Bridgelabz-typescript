var sym = Symbol("id");
var sym2 = Symbol();
console.log(sym == sym2);

// it used to create unique keys for object properties

var obj = {
  [sym]: "value1",
  name: "jayesh",
};
console.log(obj[sym]);
