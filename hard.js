// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

function sevenBoom(arr) {
  const join = arr.join("");
  if (join.includes(7)) {
    return "Boom!";
  } else {
    return "there is no 7 in the array";
  }
}

// Create a Book constructor that has two properties :

// Title
// Author
// and two methods:

// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.

// For instance, if I instantiated the following book using this Book constructor function:

// Harry Potter - J.K. Rowling (HP)
// I would get the following properties and methods:

// Examples
// HP.title ➞ "Harry Potter"

// HP.author ➞ "J.K. Rowling"

// HP.getTitle() ➞ "Title: Harry Potter"

// HP.getAuthor() ➞ "Author: J.K. Rowling"
// Notes
// Read more about constructor functions in the Resources tab.
// Remember, after you've finished writing the constructor function, you must instantiate it through the creation of new objects.

function Book(title, author) {
  // Write your properties and methods here
  this.title = title;
  this.author = author;
  this.getTitle = function (title) {
    return "Title: " + this.title;
  };
  this.getAuthor = function (author) {
    return "Author: " + this.author;
  };
}

// Instantiate your Book constructor here
const PP = new Book("Pride and Prejudice", "Jane Austen");
const H = new Book("Hamlet", "William Shakespeare");
const WP = new Book("War and Peace", "Leo Tolstoy");

// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Examples
// oddishOrEvenish(43) ➞ "Oddish"

// oddishOrEvenish(373) ➞ "Oddish"

// oddishOrEvenish(4433) ➞ "Evenish"

function oddishOrEvenish(num) {
  let answer = num
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  if (answer % 2) {
    return "Oddish";
  } else {
    return "Evenish";
  }
}
