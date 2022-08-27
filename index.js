function isPalindrome(word) {
  // Write your algorithm here

  //iterate from the beginning to the middle
  for(let i = 0; i<word.length/2; i++){
    //check each letter to the corresponding letter from the end
    const j = word.length-1-i;
    if( word[i] !== word[j]) return false;
  }

  return true;
}

/* 
  Add your pseudocode here
*/
//the first letter should be equal to the last letter 
//and the second letter equal to the second last letter
//the trend continues to the middle
//iterate from the beginning to the middle
//check each letter to the corresponding letter from the end
//if any of the pairs don't match return false
//otherwise return true
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
