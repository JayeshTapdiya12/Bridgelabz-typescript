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
