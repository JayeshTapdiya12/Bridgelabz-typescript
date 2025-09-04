// any data type

// it  allow to store the any type of value , if you are not sure about the data type whichb will come

// when to use ;
// 1. when you are migrating from js to ts
// 2. taking the data from the apis

var value: any = "hello";
console.log(value);

value = 123;
console.log(value);

value = true;
console.log(value);
value = [1, 2, 3];
console.log(value);

// one disadvantage of any is that it will turn off the type checking

// unkown data type

// it is similar to the any but it is safer than any

// it will force you to do the type checking before performing any operations

var value1: unknown = "hello";

// console.log(value1.toUpperCase());

// checking th type of the variable before the use
if (typeof value1 === "string") {
  console.log(value1.toUpperCase());
}
value1 = 100;

// means when we are performing any operation at that time we have to check the type of the variable
