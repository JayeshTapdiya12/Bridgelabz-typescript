// static keyord in typescript
//  it means we can access the property and method without creating the object of the class
// it help to increae the memory effeciency
// utitlity methods
var Company = /** @class */ (function () {
    function Company() {
        this.name = "google";
    }
    Company.getAddress = function () {
        return this.address;
    };
    Company.address = "mountain view";
    return Company;
}());
var c1 = new Company();
console.log(c1.name);
console.log(Company.address);
console.log(Company.getAddress());
