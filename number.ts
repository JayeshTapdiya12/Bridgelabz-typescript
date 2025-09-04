// syntax: var var_name:datatype=value;

var num1: number = 10;
let num2: number = 30;

var total = num1 + num2;
console.log(total);

// for the  octal ,hex,binary value there data type is number but we have to use the code before them

// oct:0o
// hexa:0x
// binary: 0b

var oct: number = 0o100005;
var hex: number = 0x0002;
var binary: number = 0b0001;

console.log(oct + hex + binary);

//  to convert the value in the number we use the Number() function or just add the + infront of the variable

var item: number = 100;
var item2 = "50";
var item2converted: number = Number(item2);
console.log(item + item2converted);
console.log(item + +item2);

// type inference : means it automatically detect the type of the varaible
