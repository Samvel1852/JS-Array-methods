let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myEvery(array, checkFn) {
  let resArr = [];
  let trueCount = 0;
  array.forEach((element) => {
    if (checkFn(element)) {
      trueCount += 1;
    }
  });
  if (trueCount > 0) {
    return true;
  }
  return false;
}

function checkFn(item) {
  if (item > 9) {
    return true;
  }
  return false;
}

console.log(myEvery(arr, checkFn));
