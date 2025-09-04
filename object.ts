// objext datatype:

// var user: { name: string; age: number; company: string } = {
//   name: "jayesh",
//   age: 20,
//   company: "BridgeLabz",
// };

// console.log(user);

// user.name = "hello";
// console.log(user);

// making a dynanic object so that if we want to add any new property in future then we can do that:

// var userData: {
//   [key: string]: string | number | undefined | boolean;
// } = {
//   name: "jayesh",
// };

// userData.age = 20;
// userData.company = "BridgeLabz";
// userData.isMarried = false;
// console.log(userData);

// nexted object:

// just definedd that quantity with the {} so that we can add any property in future:

var user: { name: string; age: number; company: string; address: {} } = {
  name: "jayesh",
  age: 20,
  company: "BridgeLabz",
  address: {
    house: "abc",
    number: "70",
    city: "indore",
  },
};
console.log(user);
