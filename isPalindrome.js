function isPalindrome(str) {
  // Optional: Preprocess (Ignore case, spaces, punctuation)
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // mismatch found → not a palindrome
    }
    left++;
    right--;
  }

  return true; // no mismatches → palindrome
}

// function isPalindrome(str) {
//   let reverse = str.split("").reverse().join("");
//   return str === reverse;
// }

console.log(isPalindrome("m ad ,am, "));
