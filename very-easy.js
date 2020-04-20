// This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:

// function hello() {

// }
// All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.

// Notes
// The returned string must be in all lowercase letters.

function hello() {
  return "hello edabit.com";
}

// Create a function that takes two numbers as arguments and return their sum.

// Examples
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

function addition(a, b) {
  const sum = a + b;
  return sum;
}

// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

function convert(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

function addition(num) {
  const answer = num + 1;
  return answer;
}

// Write a function that takes the base and height of a triangle and return its area.

// Examples
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50
// Notes
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.

function triArea(base, height) {
  let answer = (base * height) / 2;
  return answer;
}

// Create a function that takes an array and returns the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

function getFirstValue(arr) {
  var answer = arr[0];
  return answer;
}

// Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400
// Notes
// 60 seconds in a minute, 60 minutes in an hour

function howManySeconds(hours) {
  const seconds = hours * 60 * 60;
  return seconds;
}

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// Examples
// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10
// Notes
// (side1 + side2) - 1 = maximum range of third edge.
// The side lengths of the triangle are positive integers.

function nextEdge(side1, side2) {
  const answer = side1 * side2 + 1;
  return answer;
}

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0
// Notes
// The tests only use positive and negative integers.
// Don't forget to return the result.

function remainder(x, y) {
  let answer = x % y;
  return answer;
}

// Create a function that takes height and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22

function findPerimeter(height, width) {
  var answer = (height + width) * 2;
  return answer;
}

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34)

function lessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// squared(5) ➞ 25

// squared(9) ➞ 81

// squared(100) ➞ 10000
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

function squared(a) {
  return a * a;
}

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true

function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}

// Create a function that returns true when num1 is equal to num2; otherwise return false.

// Examples
// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false

function isSameNum(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.

function animals(chickens, cows, pigs) {
  const chickenLegs = chickens * 2;
  let cowLegs = cows * 4;
  var pigLegs = pigs * 4;
  return chickenLegs + cowLegs + pigLegs;
}

// Write a function that takes two integers (hours, minutes) and converts them into seconds.

// Examples
// convert(1, 3) ➞ 3780

// convert(2, 0) ➞ 7200

// convert(0, 0) ➞ 0

function convert(hours, minutes) {
  const hoursConversion = hours * 3600;
  const minutesConversion = minutes * 60;
  return hoursConversion + minutesConversion;
}

// In this challenge, you must verify the equality of two different given parameters: a and b.

// Both the value and the type of parameters need to be tested in order to have an matching equality. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learnt so far that will permit you to do two different checks (value and type) with a single statement?

// Implement a function that returns true if the parameters are equal, and false if they are different.

// Examples
// checkEquality(1, true) ➞ false
// // A number and a boolean: their type is different

// checkEquality(0, "0") ➞ false
// // A number and a string: their type is different

// checkEquality(1,  1) ➞ true
// // A number and a number: their type and value are equal

function checkEquality(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000
// Notes
// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
// Assume the screen produces 60 frames every second.

function frames(minutes, fps) {
  answer = minutes * fps * 60;
  return answer;
}

// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

// Examples
// profitableGamble(0.2, 50, 9) ➞ true

// profitableGamble(0.9, 1, 2) ➞ false

// profitableGamble(0.9, 3, 2) ➞ true
// Notes
// A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return true;
  } else {
    return false;
  }
}

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

// Examples
// divisible(1) ➞ false

// divisible(1000) ➞ true

// divisible(100) ➞ true

function divisible(num) {
  if (num % 100) {
    return false;
  } else {
    return true;
  }
}

// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// Examples
// dividesEvenly(98, 7) ➞ true
// # 98/7 = 14

// dividesEvenly(85, 4) ➞ false
// # 85/4 = 21.25
// Notes
// a will always be greater than or equal to b.

function dividesEvenly(a, b) {
  if (Number.isInteger(a / b)) {
    return true;
  } else {
    return false;
  }
}

// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0

function length(str) {
  if (str.length > 0) {
    return str.length;
  } else {
    return 0;
  }
}

// Create a function that returns true if a string is empty and false otherwise.

// Examples
// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false
// Notes
// A string containing only whitespaces " " does not count as empty.

function isEmpty(s) {
  if (s.length > 0) {
    return false;
  } else {
    return true;
  }
}
