// 1. Left Rotation of numbers

let arr = [1, 2, 3, 4, 5];

let copy = arr.slice();

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = copy[i + 1];
}

arr[arr.length - 1] = copy[0];

console.log(arr);

// 2. Right Rotation of numbers

let arr2 = [1, 2, 3, 4, 5];

let copy2 = arr2[arr2.length - 1];
for (let i = arr2.length - 1; i >= 0; i--) {
  arr2[i] = arr2[i - 1];
}

arr2[0] = copy2;
console.log(arr2);

// Concept - Nested Looping

for (let j = 1; j <= 4; j++) {
  console.log(j + " Execution");
  for (let i = 1; i <= 3; i++) {
    console.log("Hello World!");
  }
}

// Q. Left and right rotation by k element

let arr3 = [1, 2, 3, 4, 5];
let k = 2;

for (let j = 1; j < k; j++) {
  let copy3 = arr3[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr3[i] = arr3[i + 1];
  }
  arr3[arr3.length - 1] = copy3;
  
}
console.log(arr3);