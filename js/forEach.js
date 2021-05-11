// Logical implementation of forEach

let array = [1, 2, 3, 4, 5];

function myForEach(arr, fn) {
  for (let i = 0; i < arr.length; i += 1) {
    let element = arr[i];
    console.log(fn(element));
  }
}

function toDouble(elm) {
  return elm * 2;
}

console.log(myForEach(array, toDouble));
