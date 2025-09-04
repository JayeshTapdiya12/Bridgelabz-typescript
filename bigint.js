//  the bigint in the js and ts is  the maximum safe integer
console.log("the bigint eg");
// console.log(Number.MAX_SAFE_INTEGER);
var number = 9007199254740991;
var x = 1;
var y = 2;
console.log(number);
console.log(number + x);
console.log(number + y);
//  to make the number into bigint we can simply write the bigint or we can place 'n' at the end of the number;
// var number2=9007199254740991n
var number2 = 9007199254740991n;
console.log(number2 + 1n);
console.log(number2 + 2n);
