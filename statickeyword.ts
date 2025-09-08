// static keyord in typescript
//  it means we can access the property and method without creating the object of the class

// it help to increae the memory effeciency
// utitlity methods

class Company {
  name: string = "google";
  static address: string = "mountain view";
  static getAddress(): string {
    return this.address;
  }
}

var c1 = new Company();
console.log(c1.name);
console.log(Company.address);
console.log(Company.getAddress());
