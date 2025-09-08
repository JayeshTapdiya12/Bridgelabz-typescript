// the key of operator is used to create a union of string literal types from the keys of an object type.
var personData = {
    name: "jayesh",
    age: 22,
    location: "bangalore",
};
var userxyz; // userxyz can only be "name" | "age" | "location"
userxyz = "name";
userxyz = "age";
userxyz = "location";
// userxyz = "email"; /// invalid
var userX = "name"; // it will create a union of string literal types from the keys of an object type.
