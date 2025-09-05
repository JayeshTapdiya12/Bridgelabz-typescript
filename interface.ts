// interface is a way that defines the structure for an object,functions,etc

interface info {
  name: string;
  age: number;
  college: string;
}

interface teacherInfo extends info {
  subject: string;
}

var student: info = {
  name: "Jayesh Tapdiya",
  age: 24,
  college: "medicaps",
};
console.log(student);

var teacher: teacherInfo = {
  name: "jayesh Tapdiya",
  age: 50,
  college: "medicaps",
  subject: "maths", //error: Object literal may only specify known properties, and 'subject' does not exist in type 'info'.
};
console.log(teacher);
