// Strings
// - a sequence of characters enclosed within single or double quotes

let str = "Hello, World!";
let str2 = "Hello, World!";
let str3 = `Hello, World!`;

console.log(str);
console.log(str2);
console.log(str3);

// String indexing

let str4 = "AnshSharma";
str4 = str4 + " is a good boy";
console.log(str4);
console.log(str4[3]);

str4.split(" "); // split the string by space
console.log(str4.split(" "));

// Methods of the String -

// length | tells the index of the string
console.log(str4.length);

// slice(start, end)
console.log(str4.slice(1, 4)); // cuts a part of the string

console.log(str4.slice(-4, str4.length)); // we can provide negative values also to take nums from back (last)

// substring(start, end) | same as slice but it can't take negative values - so no explanation needed

// toUpperCase() | make characters uppercase
let ansh = "Ansh";
console.log(ansh.toUpperCase());

// toLowerCase() | make characters lowercase
console.log(ansh.toLowerCase());

// concat() | joins two strings
let str5 = "Ansh";
let str6 = "Sharma";
console.log(str5.concat(" ", str6, " ", "Great Hai"));

// trim() | removes the white spaces from the start and end of the string
let str7 = "     Ansh     ";
console.log(str7);
console.log(str7.trim());

// charAt
console.log(str4.charAt(3));

// indexOf() | returns the first index of the specified value
console.log(str4.indexOf("a"));

// lastIndexOf() | returns the last index of the specified value
console.log(str4.lastIndexOf("a"));

// replace() | replaces a specified value with another value
console.log(str4.replace("Ansh", "Anshu"));

// split() | splits a string into an array of substrings
console.log(str4.split(" "));

// match() | returns an array containing all matches of a pattern in a string
console.log(str4.match("Ansh"));

// search() | returns the index of the first match of a pattern in a string
console.log(str4.search("Ansh"));

// charCodeAt
console.log(str4.charCodeAt(2));

// Q. Print each character on new line

let str8 = "Hello, World!";
for (let i = 0; i < str8.length; i++) {
  console.log(str8[i]);
}

// Q. Reverse the string, and print each character on new line

let str9 = "Ansh Sharma";
for (let i = str9.length - 1; i >= 0; i--) {
  console.log(str9[i]);
}

// Q. Reverse the string order
let str10 = "Ansh Sharma";
console.log(str10.split("").reverse().join(""));

// Q. Check if the string is palidrome or not
let str11 = "madam";
let rev = "";
for (let i = str11.length - 1; i >= 0; i--) {
  rev = rev + str11[i];
}
if (str11 === rev) {
  console.log("String is palindrome");
} else {
  console.log("String is not palindrome");
}

// efficient method - 3 line code

let str12 = "hmmmmhj";
let isPalindrome = str12 === str12.split("").reverse().join("");
if (isPalindrome) console.log("String is palindrome");
else console.log("String is not palindrome");

// Q. Count the number of words in a string
let str13 = "This is a sentence";
let count = 0;
for (let i = 0; i < str13.length; i++) {
  if (str13[i] === " ") count++;
}
console.log(count + 1);

// Q. Toggle each character
// eg. if the character is lowercase then make it uppercase and if the character is uppercase then make it lowercase

let str14 = "YYoo, Honey SinGH!";
let toggledStr = "";
for (let i = 0; i < str14.length; i++) {
  if (str14[i] === str14[i].toLowerCase()) toggledStr += str14[i].toUpperCase();
  else toggledStr += str14[i].toLowerCase();
}
console.log(toggledStr);

// frequeny of a character
let str15 = "gangutaii";

let charFrequency = {};
for (let i = 0; i < str15.length; i++) {
  let char = str15[i];
  if (charFrequency[char]) charFrequency[char]++;
  else charFrequency[char] = 1;
}

console.log(charFrequency);
