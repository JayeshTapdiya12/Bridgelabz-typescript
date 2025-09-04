//  parametere in function
// function totalprice() {
//   var price = 100;
//   var item = 50;
//   console.log(price * item);
// }
function totalprice(price, item, text) {
    if (text) {
        console.log(text + price * item);
    }
    else {
        console.log(price * item);
    }
}
totalprice(100, 50);
totalprice(10, 50);
totalprice(100, 70, "hello");
// we can also use the any if we dont know the type of parameter
