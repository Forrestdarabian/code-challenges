// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""
// Notes
// Your function should return a function, not a string.

function redundant(str) {
  return function () {
    return str;
  };
}

// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and capitalises them.
// Changes all boolean values to its opposite.
// Examples
// changeTypes(["a", 12, true]) ➞ ["A!", 13, false]

// changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]

// changeTypes([false, "false", "true"]) ➞ [true, "false!", "true!"]
// Notes
// There won't be any float values.
// You won't get strings with both numbers and letters in them.
// Although the task may be easy, try keeping your code as clean and as readable as possible!

function changeTypes(arr) {
  let newArr = arr.map((element) => {
    if (typeof element === "number") {
      if (element % 2 === 0) {
        return element + 1;
      } else {
        return element;
      }
    } else if (typeof element === "string") {
      return element.charAt(0).toUpperCase() + element.slice(1) + "!";
    } else if (typeof element === "boolean") {
      return element ? false : true;
    }
  });
  return newArr;
}

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

function arrayOfMultiples(num, length) {
  return Array.from({ length: length }, (_, i) => num * (i + 1));
}

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

function changeEnough(change, amountDue) {
  let sum =
    change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
  if (sum >= amountDue) {
    return true;
  } else {
    return false;
  }
}

// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.

// Examples
// triangle(1) ➞ 1

// triangle(6) ➞ 21

// triangle(215) ➞ 23220

function triangle(n) {
  return (n * (n + 1)) / 2;
}

// Callbacks are first-class functions. This means they have first-class characteristics, like being able to be passed to other functions. There was a time when callbacks were used to handle async operations, but we needed something better because of a few shortcomings (like problems with nested callbacks).

// Here's a simple example of a callback:

// function asyncFunc(cb) {
//   let result = ""
//   // After some time the result of an async opertion comes back and is put in the "result" variable.  We'll use a string for this example.
//   result = "hello"
//   cb(result)
// }

// function callback(str) {
//   console.log(str)
// }

// asyncFunc(callback)
// console.log("goodbye")

// // goodbye
// // hello
// "goodbye" appears before "hello" because the async operation in asyncFunc() is non-blocking, meaning that it is set aside until it finishes but in the meantime we go ahead and call the next function.

// Challenge
// Fix anotherFunc() so that calls to it will change the doc variable to bye.
// Keep the setTimeout to 100ms and do not change the callback function or the doc variable.

function anotherFunc() {
  let str = "bye";
  setTimeout(() => {}, 100);
}

var doc = "hello";
result = "bye";
return result;
function callback(str) {
  doc = str;
}

// Write a function that converts an object into an array, where each element represents a key-value pair.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(obj) {
  const answer = Object.entries(obj);
  return answer;
}

// Create a function that takes an object and returns the keys and values as separate arrays.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj) {
  const answer = Object.keys(obj);
  const answer2 = Object.values(obj);
  return [answer, answer2];
}

// Write a function that converts an object into an array of keys and values.

// Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(obj) {
  const answer = Object.entries(obj);
  return answer;
}

// Throughout the 12 days of Christmas, my true love gave me in total 364 items.

// Create a function where given n days as an argument, return the total amount of items received throughout those days as an integer.

// Examples
// xmasItems(12) ➞ 364

// xmasItems(3) ➞ 10

// xmasItems(31) ➞ 5456
// Notes
// You will only be given valid inputs.
// Remember to return as an integer.
// 0 as input should return 0.

function xmasItems(n) {
  const answer = (n * (n + 1) * (n + 2)) / 6;
  return answer;
}

// Given a simple math expression as a string, neatly format it as an equation.

// Examples
// formatMath("3 + 4") ➞ "3 + 4 = 7"

// formatMath("3 - 2") ➞ "3 - 2 = 1"

// formatMath("4 x 5") ➞ "4 x 5 = 20"

// formatMath("6 / 3") ➞ "6 / 3 = 2"
// Notes
// You will need to deal with addition, subtraction, multiplication and division.
// Division will have whole number answers (and will obviously not involve 0).

function formatMath(expr) {
  return expr + " = " + eval(expr.replace("x", "*"));
}

// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

// To illustrate:

// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// Examples
// reverseAndNot(123) ➞ 321123

// reverseAndNot(123456789) ➞ 987654321123456789

const reverseAndNot = (i) => +(i.toString().split("").reverse().join("") + i);

// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

// Examples
// afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1) ➞ {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }

// afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19) ➞ {
//   "Baby" : 21,
//   "Child" : 27,
//   "Teenager" : 34,
//   "Adult" : 44,
//   "Elderly" : 90
// }

// afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5) ➞ {
//   "Genie" : 1005,
//   "Joe" : 45
// }
// Notes
// Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
// n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.
