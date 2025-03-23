// Arrays
// - contains a list of data types or values in a single variable it can be any data type - string, number, boolean, object, array, etc.

let arr2 = []; // dynamic array
arr2.push(1); // add 1 to the end of the array and so on
arr2.push(22);
arr2.push(31);
arr2.push(48);

console.log(arr2[1]); // logging the single element through indexing
console.log(arr2);
console.log(arr2.length);

arr2.pop(); // Removes the last element of the array
console.log(arr2);

// setting the value of the first element
arr2[0] = 10;
console.log(arr2);

arr2[7] = 100; // setting the value of the 8th element
console.log(arr2);

// Array made by new keyword
let arr3 = new Array(1, 2, 3, 4, 5);
console.log(arr3);

// crazy thing
let arr4 = new Array(3);
arr4.push(1);
console.log(arr4); // [ <3 empty items>, 1 ]

// take multiple values from user and add it in the array
let arr5 = new Array(5);

for (let i = 0; i < arr5.length; i++) {
  arr5[i] = Number(prompt("Enter a number:"));
}

console.log(arr5);

// Sum of n elements of an array

let arr6 = [10, 20, 30, 40, 50];
let add = 0;

for (let i = 0; i < arr6.length; i++) {
  add = add + arr6[i];
}

console.log(add);

// implement a function to find the maximum and minimum in an array

function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { max, min };
}

// Reversing

let arr7 = [1, 2, 3, 4, 5];

let e = 0,
  j = arr7.length - 1;

while (e < j) {
  let temp = arr7[e];
  arr7[e] = arr7[j];
  arr7[j] = temp;
  e++;
  j--;
}

console.log(arr7);

// Sorting

let arr8 = [1, 1, 0, 1, 0, 1, 1, 0, 0];

let yoyo = 0,
  bobo = 0;
while (yoyo < arr8.length) {
  if (arr8[yoyo] < arr8[bobo]) {
    let temp = arr8[yoyo];
    arr8[yoyo] = arr8[bobo];
    arr8[bobo] = temp;
    bobo++;
  }
  yoyo++;
}

console.log(arr8);
