//write a function are Anagrams(str1, star2) that return ture if the two strings are anagrams
// (same letters in different orders), and false otherwise.

//Hint: use object to count frequency of letters

// examples: areAnagrams("listen", "silent"); - true
//           areAnagrams("Hello", "world"); -false

function areAnagrams(str1, str2) {
  let countFrequency = new Object();
  if (str1.length != str2.length) {
    return false;
  }

  //  let countFrequency = {};

  for (let char of str1) {
    countFrequency[char] = (countFrequency[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!countFrequency[char]) {
      return false;
    }
    countFrequency[char]--;
  }
  return true;
}
let check = areAnagrams("shit", "hist");
console.log(check);
