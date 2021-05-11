let arr = [1, 2, 3, 4, 5];

// function myReduce(array, actionFn) {
//   let res;
//   array.forEach((element) => {
//     actionFn(element);
//   });
// }

function myReduce(array, acc, item, index, def) {
  if (def) {
    acc = def;
  } else {
    acc = array[0];
    array.shift();
  }
  array.forEach((element) => {
    acc += element;
  });
  return acc;
}

console.log(myReduce(arr));
