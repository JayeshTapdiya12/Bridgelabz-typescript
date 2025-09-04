//   A tuple is a typed array with a pre-defined length and types for each index.
// it has a fixed length , ordered collection of elements , and each element in the tuple have a spedicified type
var emp = ["jayesh", "tapdiya"];
var empData = ["jayesh", 123, true];
// if we push the element in the tuple it will add the elemenet but if we add in tuple array then it will  show the error
empData.push("hello");
console.log(empData);
// it has same readonly tupple
var empInfo = ["jayesh", 123, true];
empInfo.push("hello"); // it will show the error
