// Loop
// defination - this is a process of repeating a set of instructions a specified number of times or until a specific condition is met

// types - for, for-in, for-of, for-each, while, do-while

// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// types of loop - for, while, do-while

// for...in loop works with objects

const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key, obj[key]);
}
// Output:
// a 1
// b 2
// c 3

// for...of loop works with arrays

const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
// Output:
// 10
// 20
// 30

// print n no. of hello world

// for(;;) {
//   console.log("Hello, World!");
// }

// Q. sum of natural numbers and factorial of the number

let fa = prompt("Kaha tak add karwaaoge ?");

if (fa === null) {
  console.log("You pressed cancel");
} else {
  let u = Number(fa);

  if (isNaN(u)) {
    console.log("Please enter a valid number");
  } else {
    if (u > 0) {
      let sum = 0;
      for (let i = 1; i <= u; i++) {
        sum = sum + i; // for factorial change name and do fact =* i
      }
      console.log(sum);
    } else {
      console.log("the number should be positive and more than zero");
    }
  }
}

// factors of a number

let dg = prompt("Enter a number to find its factors:");

if (dg === null) {
  console.log("You pressed cancel");
} else {
  let u = Number(dg);

  if (isNaN(u)) {
    console.log("Please enter a valid number");
  } else {
    if (u > 0) {
      console.log(`Factors of ${u} are:`);
      for (let i = 1; i <= u; i++) {
        if (u % i === 0) {
          console.log(i);
        }
      }
    } else {
      console.log("The number should be positive and more than zero");
    }
  }
}

// the number is prime number

let pr = prompt("Enter a number to check if it is prime or not:");

if (pr === null) {
  console.log("You pressed cancel");
} else {
  let u = Number(pr);

  if (isNaN(u)) {
    console.log("Please enter a valid number");
  } else {
    if (u > 0) {
      let isPrime = true;
      for (let i = 2; i < u; i++) {
        if (u % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(`${u} is a prime number`);
      } else {
        console.log(`${u} is not a prime number`);
      }
    } else {
      console.log("The number should be positive and more than zero");
    }
  }
}

// break and continue
// difference between break and continue is that break will break the loop and continue will skip the current iteration

// sum of digits of a given number
let k = 12345;
let sum = 0;
while (k > 0) {
  let rem = k % 10;
  sum = sum + rem;
  k = Math.floor(k / 10);
}
console.log(sum);

// reverse a number by taking other variable names
let w = 1234;

let rev = 0;

while (w > 0) {
  let rem = w % 10;
  rev = rev * 10 + rem;
  w = Math.floor(w / 10);
}
console.log(rev);

// strong number
// a number whose sum of factorial of digits is equal to the number itself

let f = 145;
let dum = 0;

let ww = f;

while (f > 0) {
  let rem = f % 10;
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact = fact * i;
  }
  dum = dum + fact;
  f = Math.floor(f / 10);
}

if (dum === ww) {
  console.log("strong number");
} else {
  console.log("not a strong number");
}

// do while loop
// it will run atleast once

do {
  console.log("hello");
} while (12 > 13);
// 12 is not greater than 13 but it will run once

// eg.
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// Guess the Number Game

const random = Math.floor(Math.random() * 100) + 1;
let guess = null;
let attempts = 0; // Counter for number of guesses

while (guess !== random) {
  guess = prompt("Guess the number between 1 to 100:");

  if (guess === null) {
    alert("Game exited. Better luck next time!");
    break;
  }

  guess = parseInt(guess, 10);
  attempts++; // Increment attempts counter

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    continue;
  }

  if (guess > random) {
    alert(`Too high! Try again. Attempts: ${attempts}`);
  } else if (guess < random) {
    alert(`Too low! Try again. Attempts: ${attempts}`);
  } else {
    alert(
      `🎉 Congratulations! You guessed the number in ${attempts} attempts. The number was ${random}.`
    );
    break;
  }
}

// Advanced JavaScript Console Calculator

function factorial(n) {
  if (n < 0) return "Error: Factorial of negative numbers is undefined.";
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  return fact;
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    case "%":
      return num1 % num2;
    case "^":
      return Math.pow(num1, num2);
    default:
      return "Invalid operator!";
  }
}

function advancedCalculate(num, operator) {
  switch (operator) {
    case "sqrt":
      return Math.sqrt(num);
    case "sin":
      return Math.sin(num * (Math.PI / 180)); // Convert to radians
    case "cos":
      return Math.cos(num * (Math.PI / 180));
    case "tan":
      return Math.tan(num * (Math.PI / 180));
    case "log":
      return Math.log(num);
    case "!":
      return factorial(num);
    default:
      return "Invalid operator!";
  }
}

let history = [];
let exitCalculator = false;

while (!exitCalculator) {
  let choice = prompt(
    "Choose operation type:\n1. Basic (+, -, *, /, %, ^)\n2. Advanced (√, sin, cos, tan, log, !)\n3. View History\n4. Exit"
  );

  if (choice === "1") {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let operator = prompt("Enter operator (+, -, *, /, %, ^):");

    if (!isNaN(num1) && !isNaN(num2)) {
      let result = calculate(num1, num2, operator);
      alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
      console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
      history.push(`${num1} ${operator} ${num2} = ${result}`);
    } else {
      alert("Invalid input! Please enter valid numbers.");
    }
  } else if (choice === "2") {
    let num = parseFloat(prompt("Enter number:"));
    let operator = prompt(
      "Enter operation (sqrt, sin, cos, tan, log, ! for factorial):"
    );

    if (!isNaN(num)) {
      let result = advancedCalculate(num, operator);
      alert(`Result: ${operator}(${num}) = ${result}`);
      console.log(`Result: ${operator}(${num}) = ${result}`);
      history.push(`${operator}(${num}) = ${result}`);
    } else {
      alert("Invalid input! Please enter a valid number.");
    }
  } else if (choice === "3") {
    if (history.length === 0) {
      alert("No history available.");
    } else {
      alert("Calculation History:\n" + history.join("\n"));
      console.log("Calculation History:\n", history.join("\n"));
    }
  } else if (choice === "4") {
    alert("Exiting Calculator...");
    exitCalculator = true;
  } else {
    alert("Invalid choice! Please select a valid option.");
  }
}
