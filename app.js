// Basics - Variables, Operators, Operations on Operators

// 1.
let a = 10;
let b = 20;

console.log(a + b); // 30

// 2.

// + operator has two works - Addition and Concatenation
// Addition
console.log(10 + 20); // 30
// Concatenation
console.log("10" + "20"); // 1020

// But -, *, /, % Operator has only one work that is their operation
// Subtraction
console.log(20 - 10); // 10

// Interesting
console.log(20 - "10"); // 10
// the upper code is a type of Type coercion

// The behind Logic is that if the js compiler see that the string is like a number it type cast it and results the operation.

// But if the js compiler see that the string is not like a number it will not type cast it and results NaN
console.log("yoyo" / 10); // NaN

3;

// let age = Number(prompt("Please enter your age"));
// console.log(age);

// 4. swap numbers through 3 methods
// Method 1 - using extra variable

let ten = 10;
let two = 2;

let temp = ten;
ten = two;
two = temp;

console.log(ten); // 2
console.log(two); // 10

// Method 2 - using math, no extra variable

let x = 5;
let y = 30;

x = x + y; // 35
y = x - y; // 5
x = x - y;

console.log(x); // 30
console.log(y); // 5

// Method 3 - Destructuring

let p = 6;
let q = 3;

[p, q] = [q, p];

console.log(p); // 3
console.log(q); // 6

//4. simple operators
// +, -, *, /, %

// talking about MODULUS (MOD) (%)
// mod = remainder

// to take out any digit of a number eg.
let num = 10895;

console.log(num % 10); // 5
console.log(num % 100); // 95
console.log(num % 1000); // 895

// Relational operators

// ==, ===, !=, !==, >, <, >=, <=

// difference in == and ===
// == checks for value
// === checks for value and type

// Logical operators

// &&, ||, !

// && - AND
// || - OR
// ! - NOT

console.log(10 > 6 && 10 < 20); // true
console.log(10 > 6 && 10 < 5); // false
console.log(10 > 6 || 10 < 5); // true
console.log(10 > 6 || 10 < 20); // true

// Unary operators
// ++, --

// two types of increment and decrement
// pre increment and post increment
// pre decrement and post decrement

let counter = 10;
console.log(counter++); // 10
console.log(counter); // 11

console.log(++counter); // 12

// true = 1
// false = 0

let z = true;
z++;
console.log(z); // 2

// Math all functions
// Math.abs()
// Math.ceil()
// Math.floor()
// Math.round()
// Math.random()
// Math.max()
// Math.min()
// Math.pow()
// Math.sqrt()
// Math.PI
// toFixed()

// Examples

console.log(Math.abs(-10)); // 10
console.log(Math.ceil(10.3)); // 11
console.log(Math.floor(10.7)); // 10
console.log(Math.trunc(10.7)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.random()); // 0.9238095238095238
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.abs(-30)); // 30
console.log(Math.pow(2, 10)); // 1024
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(3)); // 27
console.log(Math.PI); // 3.141592653589793
console.log((3.141592653589793).toFixed(2)); // 3.14

// Math Problems
// 1. area and perimeter of rectangle

let l = 5;
let bre = 3;

console.log("Area of rectangle is " + l * bre);
console.log("Perimeter of rectangle is " + 2 * (l + bre));

// area of triangle by heron's formula

let m = 5;
let n = 6;
let c = 7;

let s = (m + n + c) / 2;

console.log(
  "Area of triangle is " + Math.sqrt(s * (s - m) * (s - n) * (s - c))
);

// circumference of circle

let r = 7;

console.log("Circumference of circle is " + 2 * Math.PI * r);

// User is valid to vote or not

// let age = Number(prompt("Enter your age... : "));

// if (isNaN(age)) {
//   console.log("Please enter a valid age");
// } else if (age >= 18) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

// shop discount
// 0-5000 - 0%
// 5001-7000 - 5%
// 7001-9000 - 10%
// more than 9000 - 20%

let amt = Number(prompt("Enter the amount of purchase... : "));

if (amt <= 5000) {
  console.log("You have no discount on", amt);
  console.log("Final amount to pay: ₹", amt);
} else if (amt > 5000 && amt <= 7000) {
  console.log("You have 5% discount");
  let discount = Math.floor(5 * amt) / 100;
  let finalAmt = amt - discount;
  console.log("Discount amount: ₹", discount);
  console.log("Final amount to pay: ₹", finalAmt);
} else if (amt > 7000 && amt <= 9000) {
  console.log("You have 10% discount");
  let discount = Math.floor(10 * amt) / 100;
  let finalAmt = amt - discount;
  console.log("Discount amount: ₹", discount);
  console.log("Final amount to pay: ₹", finalAmt);
} else {
  console.log("You have 20% discount");
  let discount = Math.floor(20 * amt) / 100;
  let finalAmt = amt - discount;
  console.log("Discount amount: ₹", discount);
  console.log("Final amount to pay: ₹", finalAmt);
}

console.log("Thank you for shopping with us");

// INR Denomination question

let amount = 9863;

if (amount >= 500) {
  console.log("500 notes : " + Math.floor(amount / 500));
  amount = amount % 500;
}

if (amount >= 200) {
  console.log("200 notes : " + Math.floor(amount / 200));
  amount = amount % 200;
}

if (amount >= 100) {
  console.log("100 notes : " + Math.floor(amount / 100));
  amount = amount % 100;
}

if (amount >= 50) {
  console.log("50 notes : " + Math.floor(amount / 50));
  amount = amount % 50;
}

if (amount >= 20) {
  console.log("20 notes : " + Math.floor(amount / 20));
  amount = amount % 20;
}

if (amount >= 10) {
  console.log("10 notes : " + Math.floor(amount / 10));
  amount = amount % 10;
}

if (amount >= 5) {
  console.log("5 notes : " + Math.floor(amount / 5));
  amount = amount % 5;
}

if (amount >= 2) {
  console.log("2 notes : " + Math.floor(amount / 2));
  amount = amount % 2;
}

if (amount >= 1) {
  console.log("1 notes : " + Math.floor(amount / 1));
}

// Ternary operator
// condition ? true : false

let age = 20;
let message = age >= 18 ? "You are an adult" : "You are a child";
console.log(message);

// Switch case
// switch (expression) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
//   default:
//     statement3;
//     break;
// }

let day = "Friday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// When to use if-else and when to use switch case
// if-else - if the value is like comparitive like < > <= >= == ===
// switch case - if the value is like a string or a number or a object, or we can say a fixed value

// If can do the work of switch case but switch case can't do the work of if-else
// but there's a trick to use relational switch case

let number = 10;

switch (true) {
  case number % 2 === 0:
    console.log("Number is even");
    break;
  case number % 2 !== 0:
    console.log("Number is odd");
    break;
}

// nested ternary operator
// it's like a ternary operator inside a ternary operator

let hmm = 10;

let yo =
  hmm % 2 === 0
    ? "Number is even"
    : hmm % 2 !== 0
    ? "Number is odd"
    : "Number is zero";
console.log(yo);

// switch case another way to write

let wo = 18;

switch (wo) {
  case 15:
  case 16:
  case 17:
  case 18:
    console.log("You are a teenager");
    break;

  default:
    console.log("You are not a teenager");
    break;
}

// * also can be used if operation is done in variable eg. wo = 2 + 3 but in case value is 5 then it will work

// Loop

