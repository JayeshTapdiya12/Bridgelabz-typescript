//  inheritance in typescript means one class can inherit the properties and methods of another class using extends keyword.

class Auth {
  login(name: string, pass: number) {
    if (name && pass) {
      console.log("login successfully");
    } else {
      console.log("login failed");
    }
  }
}

class student extends Auth {
  result(marks: number) {
    if (marks >= 35) {
      console.log("student is pass");
    } else {
      console.log("fail");
    }
  }
}

class teacher extends Auth {
  subject(sub: string) {
    console.log("he teahces " + sub);
  }
}
var s1 = new student();
console.log(s1.login("jayesh", 1234));
console.log(s1.result(45));
var t1 = new teacher();
console.log(t1.login("jayesh", 1234));
console.log(t1.subject("maths"));
