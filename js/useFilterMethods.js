// Your functions must use filter method

// Given an array, return a new array that only includes the numbers.

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
// [1, 2, 55, 166]

function keepNumbersOnly(array) {
  let tempArr = array;
  tempArr = tempArr.filter((item) => !isNaN(parseInt(item)));
  return tempArr;
}

console.log(keepNumbersOnly(arr));
// console.log(!isNaN(parseInt(true)));
