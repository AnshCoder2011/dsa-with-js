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
