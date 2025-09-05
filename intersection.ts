// ontersection allow you to combine multiple types into one. This allows you to create a new type that has all the properties of the combined types.

// it is intialze by & symbol

type personA = { name: string };
type personB = { age: number };

type personC = personA & personB;

var personDataA: personA = { name: "jayesh" };
var personDataB: personB = { age: 24 };
var personDataC: personC = { name: "jayesh", age: 24 };

console.log(personDataA);
console.log(personDataB);
console.log(personDataC);

// union is the or and the intersection is the and

// and when to combine the interface

interface interfaceA {
  name: string;
}
interface interfaceB {
  age: number;
}
type interfaceC = interfaceA & interfaceB;
