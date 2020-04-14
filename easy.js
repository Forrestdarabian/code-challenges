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
