// there are three access modifiers in typescript
// 1. public - can be accessed anywhere
// 2. private - can't be accessed outside the class
// 3. protected - can be accessed in the class and its subclass
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.isCart = false;
        this.isOrder = false;
        this.name = name;
        this.price = price;
    }
    Product.prototype.addToCart = function () {
        this.isCart = true;
    };
    Product.prototype.addToOrder = function () {
        if (this.isCart) {
            this.isOrder = true;
        }
        else {
            console.log("1st add the product in the cart");
        }
    };
    return Product;
}());
var product1 = new Product("Laptop", 45000);
product1.addToOrder();
console.log(product1);
product1.addToCart();
product1.addToOrder();
console.log(product1);
