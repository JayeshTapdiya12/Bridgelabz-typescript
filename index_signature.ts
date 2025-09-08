// index signature in type script allow you to  define the object  with dynamic keys  while  specifiging the type of the keys and the type of the values

// type userData7type = {
//     mobile: number,
//     id: number,
//     age:number
// }
// this is the statics way of defining the object

type userData7type = {
  name: string;
  mobile: number;
  id: number;
  [key: string]: number | string;
};
// this is the dynamic way of defining the object

// now we can add any dataype and as manay key in the object
var userData7: userData7type = {
  name: "jayesh",
  mobile: 1234567890,
  id: 1,
  age: 25,
};
