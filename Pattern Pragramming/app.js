let prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements: "));
for (let i = 1; i <= n; i++) {
  process.stdout.write("* ");
}

// Now I want pattern like this 👇🏻 take n and make n rows and columns
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write("* ");
  }
  console.log(); // adds a line gap
}

// Right angle triangle pattern
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log(); // adds a line gap
}

// Right angle triangle number pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log(); // adds a line gap
}

// Right angle triangle alphabets pattern
// A
// A B
// A B C
// A B C D
// A B C D E
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(64 + j) + " ");
  }
  console.log(); // adds a line gap
}

// Inverted right angle triangle pattern
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log(); // adds a line gap
}

// Inverted right angle mirror triangle pattern
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  "); // adds a space gap
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log(); // adds a line gap
}


// print X pattern
// *       *
//   *   *
//     *
//   *   *
// *       *

for (let i = 1; i <= n; i++) {  
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j == n + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  "); // adds a space gap
    }
  }
  console.log(); // adds a line gap
}
