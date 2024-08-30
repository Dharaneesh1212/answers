`use strict`;

//1 Write a JavaScript function to check if a given number is even or odd.
// let number = 5;
// if (number === 0) {
//   console.log("please enter any other number");
// } else if (number %2 === 0) {
//   console.log("its even");
// } else {
//   console.log("its odd");
// }

//2 Write a JavaScript program to calculate the factorial of a number.
// const factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };
// console.log(factorial(7));

//3 Write a JavaScript program to find the sum of all numbers in each array,
// excluding any numbers that are less than 0.
// let numbers = [1, -2, -2, 3, 4, -5, -6, -5];
// const sumNumbers = (arr) => {
//   return arr
//   .filter((num) => num >= 0) // creating new array with 0 and greater numbers alone
//   .reduce((sum, num) => sum + num, 0); // sum values in the array and 0 at last
// };
// const result = sumNumbers(numbers);
// console.log(result);

//4 Write a JavaScript program to check if a given number, is a perfect square.
// const squareRoot = (num) => {
//   if (num < 0) return false;
//   const sqrroot = Math.sqrt(num);
//   return sqrroot === Math.floor(sqrroot);
// };
// console.log(squareRoot(25));

//5 In an array every element appears twice except for one. Write a JavaScript program
//  to find the non-repeated element in an array using bit manipulation.
// const numbers =[1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7]
// const nonRepeated = (arr) => {
// return arr.filter((value, index)=> arr.indexOf(value) === index)
// }
// console.log(nonRepeated(numbers));

// 6 Write a program that takes an array of elements and counts the occurrences of each element
// const countOccurrences = (arr) => {
//   const counts = {};

//   arr.forEach((element) => {
//     counts[element] = (counts[element] || 0) + 1;
//   });

//   return counts;
// }
// const arrone = [1, 2, 3, 2, 1, 4, 5, 4];
// const occurrences = countOccurrences(arrone);

// console.log(occurrences);

// 7 Write a program that takes an array of strings and reverses each string in the array using the array methods.
// const arrtwo = ["apple", "banana", "orange"];
// const reversedStrings = arrtwo.map(str => str.split("").reverse().join(""));
// console.log(reversedStrings);

// 8 Write a program that takes two objects and merges them into a single object.
// const obj1 = { name: "John", age: 30 };
// const obj2 = { city: "New York", occupation: "Engineer" };
// const merge = {...obj1,...obj2}
// console.log(merge);

// 9 Write a program that takes an array of objects and converts it into a single object using.
// const arrthree = [
//   { key: "name", value: "John" },
//   { key: "age", value: 30 },
//   { key: "city", value: "New York" },
// ];
// const mergerobj = arrthree.reduce((acc, cur)=>{
//     acc[cur.key] = cur.value
//     return acc
// })
// console.log(mergerobj);

// 10 Write a program that takes an object and counts the occurrences of each property
// const countOccurrences = (obj) => {
//   const counts = {};

//   Object.keys(obj).forEach((key) => {
//     const value = obj[key];

//     counts[value] = (counts[value] || 0) + 1;
//   });

//   return counts;
// };
// const obj3 = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   profession: "Engineer",
// };
// const occurrences = countOccurrences(obj3);

// console.log(occurrences);

// 11 Write a program that takes two arrays and finds their intersection using Sets.
// const arrfour = [1, 2, 3, 4, 5];
// const arrfive = [3, 4, 5, 6, 7];

// // it removes duplicate
// const set1 = new Set(arrfour);
// const set2 = new Set(arrfive);

// const intersection = [...set1].filter(item => set2.has(item));

// console.log(intersection);

// 12 Write a program that takes an array containing both truthy and falsy values and
// removes the falsy values using  the array methods.
// const arrsix = [0, "hello", "", 42, false, "world", null, true, undefined];
// const filteredArray = arrsix.filter(Boolean);

// console.log(filteredArray);

// 13 Write a program that takes an object and extracts properties
// with renamed variables using destructuring assignment.
// const user = { name: "John", age: 30 };
// const{name: personname , age : personage} = user
// console.log(personname);
// console.log(personage);

// 15 Write a JavaScript function that merges two arrays and removes all duplicate elements.
// let arrayseven = [1, 2, 3];
// let arrayeight = [2, 30, 1];

// const merge = [...new Set([...arrayseven, ...arrayeight])]
// console.log(merge);

// 16 Write a JavaScript function to generate an array between two integers of 1 step length.
// const generateRange = (start, end) => {
//   const result = [];

//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// };
// console.log(generateRange(-4, 7));

// 17 Write a JavaScript program to check if an array is a factor chain or not.
// A factor chain is an array in which the previous element is a factor of the next consecutive element.
// const isFactorChain = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] % arr[i] !== 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isFactorChain([2, 4, 8, 16, 32]));

// 18 Write a JavaScript program to find all the unique values in a set of numbers.
// const uniqueset = (arr) => {
//   const unique = new Set(arr);
//   return [...unique];
// };
// const arrten = [1, 2, 2, 3, 4, 4, 5];
// const arreleven = [1, 2, 3, 4, 5];
// const arrtwelve = [1, -2, -2, 3, 4, -5, -6, -5];

// console.log(uniqueset(arrten));
// console.log(uniqueset(arreleven));
// console.log(uniqueset(arrthirteen));

// 19 Write a JavaScript program to sort the items of an array.
// let arrnine = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// arrnine.sort((a, b) => a - b);
// console.log(arrnine);

// 21 Write a JavaScript program to get the length of a JavaScript object.
// const student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// const length = Object.keys(student).length
// console.log(length);

// 24 Write a function that determines whether a given string is a valid JSON or not.
// const fetching = (str) => {
//     try {
//         JSON.parse(str)
//         return true
//     } catch (error) {
//         return false
//     }
// }
// console.log(fetching('{"name": "John", "age": 30}'));
// console.log(fetching('{"name": "John", "age": 30,}'));
// console.log(fetching('{"name": "John", "age": 30'));
// console.log(fetching('Hello, World!'));

// 25 Implement a function that sorts an array of objects by a specific property in ascending order.
// const sortByProperty = (arr, property) => {
//   return arr.sort((a, b) => {
//     if (a[property] < b[property]) return -1;
//     if (a[property] > b[property]) return 1;
//     return 0;
//   });
// };
// const people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
// ];
// console.log(sortByProperty(people, "age"));


// 27 Implement a function to reverse words in a sentence without reversing the characters within each word.
// const reverseWords = (arr) => {
//     const word = arr.split(" ")
//     const reverseWords = word.reverse()
//     return reverseWords.join(" ")
// }
// console.log(reverseWords("hello world"));


// 28 Write a JavaScript function reverseString(str) that takes a string str as input and returns the reverse of the string.
// console.log(reverseString("JavaScript")); // Should return "tpircSavaJ"


// 29 Write a JavaScript function isPalindrome(str) that checks if a given string str is a palindrome (reads the same forwards and backwards).
// console.log(isPalindrome("Hello, World!")); // Should return false
// console.log(isPalindrome("A man a plan a canal Panama")); // Should return true

// 30 Write a JavaScript function capitalizeWords(str) that capitalizes the first letter of each word in a given string str.
// console.log(capitalizeWords("this is a test")); // Should return "This Is A Test"

// 31 FizzBuzz: Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number.
//  For multiples of 5, print "Buzz" instead of the number.
//  For numbers that are multiples of both 3 and 5, print "FizzBuzz."

// 32 Anagram Checker: Write a function that checks whether two given strings are anagrams of each other
// (contain the same characters but in a different order).

// 33 Write a program that takes an object and counts the occurrences of each property
// const obj4 = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   profession: "Engineer",
// };
//  Output =  {
//   name: 1,
//   age: 1,
//   city: 1,
//   profession: 1,
// }

// 34 Write a program that takes an object and checks if a specific property exists
// const obj5 = { name: "John", age: 30, city: "New York" };

// 35 Write a program that takes an object containing some properties with undefined values and removes those properties
// const obj6 = { name: "John", age: undefined, city: "New York" };

// 36 Write a function add that takes two numbers as arguments and returns their sum.
// console.log(add(5, 3)); // Should return 8

// 37 Write a function delayedGreeting that takes a name as input and logs a greeting message with that name after a delay of 2 seconds.
// delayedGreeting("Alice"); // Should log "Hello, Alice!" after 2 seconds

// 38 Write a function forEach that takes an array and a callback function as arguments
// and calls the callback function for each element in the array.
// const numbers = [1, 2, 3, 4, 5];
// forEach(numbers, (num) => {
//   console.log(num * 2);
// });
// Should log:
// 2
// 4
// 6

// 39 Write an async function fetchData that fetches data from a remote API using fetch.
//  Handle both success and error scenarios using promises.

//  40 Write a JavaScript function to check whether a string is blank or not.
// console.log(is_Blank(""));

// 41 Check if a given number, is a prime number.
// console.log(isPrime(7)); // Output: true

// 42 Check if a given string is a valid email address.
// console.log(isValidEmail("example@email.com")); // Output: true

// 43 Write a function to find missing elements in a given range within an array.
// const arr = [1, 3, 4, 7, 9];
// const rangeStart = 1;
// const rangeEnd = 10;
// const missingElements = findMissingElements(arr, rangeStart, rangeEnd);
// console.log(missingElements); // Expected Output: [2, 5, 6, 8, 10]

// 44 Implement a function that returns the longest word in a sentence.

// 45 Write a JavaScript program to display the current day and time in the following format.

//  46 Write a JavaScript program to get the current date.

// 47
