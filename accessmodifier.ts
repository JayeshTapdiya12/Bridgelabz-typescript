// there are three access modifiers in typescript
// 1. public - can be accessed anywhere
// 2. private - can't be accessed outside the class
// 3. protected - can be accessed in the class and its subclass

class Product {
  name: string;
  price: number;
  isCart: boolean = false;
  isOrder: boolean = false;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  addToCart(): void {
    this.isCart = true;
  }

  addToOrder(): void {
    if (this.isCart) {
      this.isOrder = true;
    } else {
      console.log("1st add the product in the cart");
    }
  }
}

var product1 = new Product("Laptop", 45000);
product1.addToOrder();
console.log(product1);
product1.addToCart();
product1.addToOrder();
console.log(product1);
