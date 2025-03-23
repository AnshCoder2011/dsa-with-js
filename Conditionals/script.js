// Condtionals

// User is valid to vote or not

let umar = Number(prompt("Enter your umar... : "));

if (isNaN(umar)) {
  console.log("Please enter a valid umar");
} else if (umar >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

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
