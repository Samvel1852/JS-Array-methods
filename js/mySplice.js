let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function mySplice(array, start, count, ...items) {
  let tempArr = [];
  array.forEach((element, index) => {
    if (index < start) {
      tempArr.push(element);
    }
  });
  tempArr.push(...items);
  array.forEach((element, index) => {
    if (index > start + count) {
      tempArr.push(element);
    }
  });
  return tempArr;
}

console.log(mySplice(arr, 2, 3, 20, 30, 40));
