/** product: calculate the product of an array of numbers. */

function product(nums) {
  let prod = 1;

  //base case
  if (nums.length === 0) return prod;

  //normal case
  prod *= nums[0];
  nums.shift();
  return prod * (product(nums));
}

// console.log(product([1, 2, 3])); //6


/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, maxLength = 0) {
  if (words[index] === undefined) return maxLength;

  if (words[index].length > maxLength) maxLength = words[index].length;

  return longest(words, index + 1, maxLength);
}


console.log(longest(["hello", "hi", "hola"]));  // 5
/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, chars = '') {
  if (str[index] === undefined) return chars;

  chars += str[index];

  return everyOther(str, index + 2, chars);
}
console.log(everyOther("hello"));  // "hlo")
/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  //base case
  if (str[index] === undefined) return true;
  if (str[index] !== str[str.length - 1 - index]) return false;
  index++;
  return isPalindrome(str, index);

}
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("tacodog"));  // false



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (arr[index] === undefined) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}
let animals = ["duck", "cat", "pony"];

console.log(findIndex(animals, "cat"));  // 1
console.log(findIndex(animals, "porcupine"));   // -1
console.log(findIndex(animals, "pony"));   // 2

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, rev = []) {

  if (str[index] === undefined) return rev.join('');
  rev.push(str[str.length - 1 - index]);
  return revString(str, index + 1, rev);
}
console.log(revString("porcupine")); // 'enipucrop')
/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, result = []) {
  //iterate through object values
  for (let val of Object.values(obj)) {
    if (typeof val === 'string') {
      result.push(val);
    }
    if (typeof val === 'object') {
      gatherStrings(val, result);
    }
  }
  return result;

}




let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

console.log(gatherStrings(nestedObj)); // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length-1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (val === arr[mid]) return mid;
  else if (val < arr[mid]) {
    return binarySearch(arr, val, start, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, end);
  }

}



console.log(binarySearch([1, 2, 3, 4], 1)); // 0
console.log(binarySearch([1, 2, 3, 4], 3)); // 2
console.log(binarySearch([1, 2, 3, 4], 5)); // -1


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
