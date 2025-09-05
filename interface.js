// interface is a way that defines the structure for an object,functions,etc
var student = {
    name: "Jayesh Tapdiya",
    age: 24,
    college: "medicaps",
};
console.log(student);
var teacher = {
    name: "jayesh Tapdiya",
    age: 50,
    college: "medicaps",
    subject: "maths", //error: Object literal may only specify known properties, and 'subject' does not exist in type 'info'.
};
console.log(teacher);
