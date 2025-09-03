const msg: string = "Hello, TypeScript!";
console.log(msg);

const uniqueKey: symbol = Symbol("description");
const obj = {
  [uniqueKey]: "This is a unique property",
};
console.log(obj[uniqueKey]);
