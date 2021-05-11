let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function mySlice(array, start, end) {
  let tempArr = [];
  array.forEach((element, index) => {
    if (index >= start && index < end) {
      tempArr.push(element);
    }
  });
  return tempArr;
}

console.log(mySlice(arr, 2, 4));
