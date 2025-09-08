var College = /** @class */ (function () {
    function College(name) {
        this.name = name;
    }
    College.prototype.displayName = function () {
        console.log(this.name);
    };
    return College;
}());
var c1 = new College("Bridgelabz");
console.log(c1.name);
c1.displayName();
