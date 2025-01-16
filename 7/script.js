/**
 * TODO write a JavaScript function that takes a string and returns it in revserse order.
 * DO NOT use the built-in reverse() method.
 * Should return the reversed string.
 * For example:
 *   reverseString("hello") should return "olleh"
 *   reverseString("world") should return "dlrow"
 *   reverseString("12345") should return "54321"
 */
<<<<<<< HEAD
function reverseString(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reversedString;

}
console.log(reverseString("hello"));

=======
function reverseString() {}
>>>>>>> origin/a7

/**
 * TODO write a JavaScript function that takes a number and returns it in the reverse order.
 * Should return the reversed number.
 * For example:
 *   reverseNumber(12345) should return 54321
 *   reverseNumber(98765) should return 56789
 *   reverseNumber(101010) should return 10101
 */

<<<<<<< HEAD
function reverseNumber(num) {
  return num.toString().split("").reverse().join("");
}
reverseNumber(54321);
=======
function reverseNumber() {}
>>>>>>> origin/a7

/**
 * TODO destruct the following object to get name and age.
 */
const person = {
  name: "John",
  info: {
    age: 30,
    city: "New York",
    job: "Developer",
  },
};
<<<<<<< HEAD
const { name, info: { age } } = person;
=======

>>>>>>> origin/a7
/**
 * TODO destruct the following array the first and second element, and the remaining elements in a third variable.
 */

const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];
<<<<<<< HEAD
const [first, second, ...rest] = thisArray;
=======

>>>>>>> origin/a7
/**
 * !!!!OPTIONAL!!!!
 * TODO Write a JavaScript function that checks if a string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads * the same forward and backward. For example, "madam" is a palindrome.
 * The function should return true if the string is a palindrome and false if it is not.
 * For example:
 *    isPalindrome("madam") should return true
 *    isPalindrome("hello") should return false
 *    isPalindrome("12321") should return true
 *    isPalindrome("race car") should return true
 *    isPalindrome("coding") should return false
 */

<<<<<<< HEAD
function isPalindrome(string) {
   // Remove spaces and convert the string to lowercase for normalization
  const cleanedString = string.replace(/\s+/g, "").toLowerCase();
  // Check if the cleaned string is equal to its reversed version
  return cleanedString === reverseString(cleanedString);
}
=======
function isPalindrome() {}
>>>>>>> origin/a7
