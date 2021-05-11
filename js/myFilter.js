let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myFilter(array, checkFn) {
  let resArr = [];
  array.forEach((element) => {
    if (checkFn(element)) {
      resArr.push(element);
    }
  });
  return resArr;
}

function checkFn(item) {
  if (item > 4) {
    return true;
  }
  return false;
}

console.log(myFilter(arr, checkFn));
