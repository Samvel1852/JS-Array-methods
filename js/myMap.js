let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myMap(array, actionFn) {
  let resArr = [];
  array.forEach((element) => {
    resArr.push(actionFn(element));
  });
  return resArr;
}

function action(elm) {
  return elm * 2;
}

console.log(myMap(arr, action));
