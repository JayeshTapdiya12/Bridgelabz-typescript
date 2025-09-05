// type in the typescript  define the custom data type for the object ,function.etc;

type dataType = {
  name: string;
  age: number;
};

// var empData = {
//   name: "jayesh",
//   age: 25,
// };

var empData: dataType = {
  name: "jayesh",
  age: 25,
};

// var studentData = {
//   name: "jayesh",
//   age: 25,
//   course: "MERN",
// };

var studentData: dataType & { course: string } = {
  name: "jayesh",
  age: 25,
  course: "MERN",
};
// intersection type

//  the main difference between the interface and type is that the we can not do the union in the interface but in the type we can do the interface;
// but if we use the interface we can use the extend to combine the datatype;
