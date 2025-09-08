interface CollegeDataType {
  name: string;
  displayName(): void;
}

class College implements CollegeDataType {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  displayName(): void {
    console.log(this.name);
  }
}

var c1 = new College("Bridgelabz");
console.log(c1.name);

c1.displayName();
