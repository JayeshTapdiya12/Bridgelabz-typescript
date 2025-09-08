// typeguard in typescript
// it is a technique used to narrow down the type of a variable within a conditional block.

// type of the typeguard :
// 1. typeof typeguard =only check primitive type like var , string , boolean etc;
// 2. instance of typeguard - check they type of class instance
// 3. custom typeguard  - to check the type of the interface;

let data: string | number | boolean = "jayesh";

data = 20;

if (typeof data === "string") {
  console.log("the type is string");
} else if (typeof data === "number") {
  console.log("the type is number");
} else {
  console.log("the type is boolean");
}

// for checking class instance
class Product21 {}
var p1 = new Product21();

class Order21 {}

var c1 = new Order21();
function checkClass(data: Product21 | Order21) {
  if (data instanceof Product21) {
    console.log("the class is product");
  } else {
    console.log("the class is order");
  }
}
checkClass(p1);
checkClass(c1);

interface userInfo {
  name: string;
  age: number;
}
interface userData {
  email: string;
  address: string;
}

var userinfo22: userData | userInfo = { name: "jayesh", age: 22 };

var userData22: userData | userInfo = { email: "afa", address: "dfgdfg" };

function typechekcing(data: userData | userInfo) {
  if ((data as userData).email !== undefined) {
    console.log("this is user data");
  } else {
    console.log("this is user info");
  }
}

typechekcing(userinfo22);
