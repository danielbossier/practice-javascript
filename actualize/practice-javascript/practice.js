/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable max-len */
// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();

// // Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// // Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // Start with the hash: city_populations = {chi: 2700000}
// // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000; // same as cityPopulations["sf"]
// console.log(cityPopulations);

// // Write a method that prints out every number from 1 to 100.

// function print100Numbers() {
//   var i = 1;
//   while (i < 101) {
//     console.log(i);
//     i += 1;
//   }
// }

// print100Numbers();

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function printOdd() {
//   var i = 1;
//   while (i < 100) {
//     console.log(i);
//     i += 2;
//   }
// }

// printOdd();

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function count55(numbers) {
//   var i = 0;
//   var count = 0;
//   while (i < numbers.length) {
//     if (numbers[i] === 55) {
//       count += 1;
//     }
//     i += 1;
//   }
//   console.log(count);
// }

// count55([55, 55, 55, 1, 2, 3]);

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// // For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function addAwesomesauce(array) {
//   var i = 0;
//   var awesome = [];
//   while (i < array.length) {
//     awesome.push(array[i]);
//     awesome.push("awesomesauce");
//     i += 1;
//   }
//   console.log(awesome);
// }

// addAwesomesauce(["a", "b", "c", "d", "e"]);

// // Start with the hash: item_amounts = {chair: 5, table: 2}
// // Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

// var item_amounts = { chair: 5, table: 2 };
// item_amounts["chair"] = 3;

// console.log(item_amounts);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// // // The final result should be: {chair: 5, table: 2, desk: 7}

// var item_amounts = { chair: 5, table: 2 };
// item_amounts["desk"] = 7;

// console.log(item_amounts);

// // Write a method that accepts a number and returns its factorial.
// // For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var product = 1;
//   while (number > 0) {
//     product *= number;
//     number -= 1;
//   }
//   console.log(product);
// }

// factorial(5);

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// // # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// function selectEvenItems(strings) {
//   var index = 0;
//   var result = [];
//   while (index < strings.length) {
//     result.push(strings[index]);
//     index += 2;
//   }
//   return result;
// }

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function max(numbers) {
//   var index = 1;
//   var current_max = numbers[0];
//   while (index < numbers.length) {
//     if (numbers[index] > current_max) {
//       current_max = numbers[index];
//     }
//     index += 1;
//   }
//   console.log(current_max);
// }

// max([10, 4, 8, 12, 2]);

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var product = 1;
//   while (number > 0) {
//     product *= number;
//     number -= 1;
//   }
//   console.log(product);
// }

// factorial(5);

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// function descending(numbers) {
//   var result = [];
//   var index = numbers.length - 1;
//   while (index > -4) {
//     result.push(numbers[index]);
//     index -= 1;
//   }
//   console.log(result);
// }

// descending([1, 2, 3]);

// # 1. Write a function that takes in an array of numbers and returns its sum.

// function sum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (n) {
//     sum += n;
//   });
//   console.log(sum);
// }

// sum([1, 2, 3, 4, 5]);

// 2. Write a function that takes in an array of strings and returns the smallest string.

// function smallest(array) {
//   var shortest = array[0];
//   var index = 1;
//   while (index < array.length) {
//     if (shortest.length > array[index].length);
//     {
//       shortest = array[index];
//     }
//     index += 1;
//   }
//   console.log(shortest);
// }

// smallest(["mouse", "bird", "dog"]);

// # 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// function reverse(array) {
//   var backwards = [];
//   var index = 0;
//   while (index < array.length) {
//     backwards.push(array.pop());
//   }
//   index += 1;
//   console.log(backwards);
// }

// reverse([1, 2, 3, 4]);

// // 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

// function aTimes(array) {
//   var count = 0;
//   var i = 0;
//   while (i < array.length) {
//     if (array[i][0] === "a") {
//       count += 1;
//     }
//     i += 1;
//   }
//   console.log(count);
// }

// // aTimes(["one", "two", "apple", "alpha"]);

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

// function join(array) {
//   var i = 0;
//   var combined = "";
//   while (i < array.length - 1) {
//     combined += array[i] + ",";
//     i += 1;
//   }
//   combined += array[array.length - 1];
//   console.log(combined);
// }

// join(["one", "two", "three", "four"]);

// eslint-disable-next-line max-len
// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

// function product(numbers) {
//   var product = 1;
//   var i = 0;
//   while (i < numbers.length) {
//     product *= numbers[i];
//     i += 1;
//   }
//   console.log(product);
// }

// product([2, 5, 7, 9]);

// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.

// code solution

// setTimeout(function () {
//   console.log("First task done!");
// }, 2000);

// setTimeout(function () {
//   console.log("Second task done!");
// }, 4000);

// setTimeout(function () {
//   console.log("Third task done!");
// }, 6000);

var a;
var b = 2;

a = 7;

b = a;

console.log(a);
