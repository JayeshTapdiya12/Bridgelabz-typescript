// the key of operator is used to create a union of string literal types from the keys of an object type.

// it is mainly used with the objects;

type Person = {
  name: string;
  age: number;
  location: string;
};
let personData: Person = {
  name: "jayesh",
  age: 22,
  location: "bangalore",
};

type userxyz = keyof Person; // it will create a union of string literal types from the keys of an object type.
let userxyz: userxyz; // userxyz can only be "name" | "age" | "location"
userxyz = "name";
userxyz = "age";
userxyz = "location";
// userxyz = "email"; /// invalid
let userX: keyof typeof personData = "name"; // it will create a union of string literal types from the keys of an object type.
