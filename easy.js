// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300
// Notes
// Expect any positive number between 1 and 1000.

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// This challenge will help you interpret mathematical relationships both algebraically and geometrically.

// Matchstick Houses, Steps 1, 2 and 3

// Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Examples
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436
// Notes
// Step 0 returns 0 matchsticks.
// The input (step) will always be a non-negative integer.

function matchHouses(step) {
  const matchSticks = step * 6 - (step - 1);
  if (step === 0) {
    return 0;
  }
  return matchSticks;
}

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.

function minMax(arr) {
  var minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  const answer = [minimum, maximum];
  return answer;
}

// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false
// Notes
// Note the strict inequality (see example #3).

function canNest(arr1, arr2) {
  if (Math.min(...arr1) > Math.min(...arr2)) {
    if (Math.max(...arr1) < Math.max(...arr2)) {
      return true;
    }
  } else {
    return false;
  }
}

// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.
// Examples
// whichIsLarger(() => 5, () => 10) ➞ "g"

// whichIsLarger(() => 25,  () => 25) ➞ "neither"

// whichIsLarger(() => 505050, () => 5050) ➞ "f"
// Notes
// This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).

function whichIsLarger(f, g) {
  if (f() > g()) {
    return "f";
  }
  if (g() > f()) {
    return "g";
  } else if (f() === g()) {
    return "neither";
  }
}

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

// Examples
// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
// Notes
// Dates are zero zero based (see resources).
// All test cases contain valid dates.

function timeForMilkAndCookies(date) {
  if (date.getMonth() === 11 && date.getDate() === 24) {
    return true;
  } else {
    return false;
  }
}

// Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.

// Examples
// isJS("/users/user.jsx") ➞ true

// isJS("/users/user.js") ➞ true

// isJS("/users/user.ts") ➞ false

function isJS(path) {
  if (path == "/users/user.js") {
    return true;
  }
  if (path == "/users/user.jsx") {
    return true;
  } else {
    return false;
  }
}

// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case-sensitive (see second example).

function charCount(myChar, str) {
  const splitUp = str.split("");
  return splitUp.filter((x) => x == myChar).length;
}

// Async operations don't always go as planned. When errors creep up we need to know how to handle them. We can pass the reject callback to our executor function to pass errors to our promise.

// let promise = new Promise( (resolve, reject) => {
//   setTimeout(( ) => {
//     /* something went wrong */
//      reject('oops!')
//   }, 1000)
// })
// You can pass Error objects as well. Here we pass a simple string "oops!".

// Challenge
// Reject the promise with the simple string "It's not a dog!".

// Notes
// Check the Resources tab for more info on promises.

let promise = new Promise((resolve) => {
  let animal = "cat";
  setTimeout(() => {
    if (animal === "dog") {
      resolve("It's a dog!");
    }
    if (animal !== "dog") {
      reject("It's not a dog!");
    }
  }, 1000);
});

// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

// Examples
// cardHide("1234123456785678") ➞ "************5678"

// cardHide("8754456321113213") ➞ "************3213"

// cardHide("35123413355523") ➞ "**********5523"
// Examples
// Ensure you return a string.
// The length of the string must remain the same as the input.

function cardHide(card) {
  const last4Digits = card.slice(-4);
  const overwrite = last4Digits.padStart(card.length, "*");
  return overwrite;
}

// Write a function that calculates the factorial of a number recursively.

// Examples
// factorial(5) ➞ 120

// factorial(3) ➞ 6

// factorial(1) ➞ 1

// factorial(0) ➞ 1

function factorial(n) {
  if (n < 0) return -1;
  else if (n == 0) return 1;
  else {
    return n * factorial(n - 1);
  }
}

// Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".

// const REGEXP = /blue|red/

// "red flag".match(REGEXP)  // red
// "blue flag".match(REGEXP)  // blue

// // Matches "blue" in "blue flag" and "red" in "red flag".
// Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

// Examples
// "red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

// "yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

// "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]

const REGEXP = /blue flag|red flag/g;
"blue flag".match(REGEXP);
"red flag".match(REGEXP);

// Write a function that takes a positive integer and return its factorial.

// Examples
// factorial(4) ➞ 24

// factorial(0) ➞ 1

// factorial(9) ➞ 362880
// Notes
// The factorial of 0 is 1.
// The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).

function factorial(z) {
  if (z < 0) {
    return -1;
  } else if (z == 0) {
    return 1;
  } else {
    return z * factorial(z - 1);
  }
}

// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Notes
// Zero is a non-negative number.

function filterArray(arr) {
  return arr.filter((n) => typeof n === "number");
}

// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
// doubleChar("String") ➞ "SSttrriinngg"

// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleChar("1234!_ ") ➞ "11223344!!__  "
// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.

function doubleChar(str) {
  return str
    .split("")
    .map((x) => x.repeat(2))
    .join("");
}
