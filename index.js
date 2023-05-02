function isPalindrome(word) {
  // Write your algorithm here
  //split word into array of individual letters
  const splitter = word.split("")
  //create new reversed array
  const newArray = splitter.reverse().join("");
  //check if the reversed array is the same valueas the original
  return newArray === word
  //return true or false
}

/* 
  Add your pseudocode here
  split word into array of individual letters
  create new reversed array
  convert the reversed array into a single value
  compare the new reversed value to the original
  return true or false
*/

/*
  Add written explanation of your solution here
  the function breaks the word into an array of individual letters using .split. after that, the individual letters are reversed and put into a new array, which is converted again into a single element. if the values are strictly equivalent, the function returns true. otherwise it returns false.
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotator"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("coding is fun"));
}

module.exports = isPalindrome;
