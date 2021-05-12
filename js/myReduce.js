let arr = [1, 2, 3, 4, 5];
let obj = {}; // grem ham el obyekti hamar lcni key u value, array index-@ key-n, arjeq@ value-n
//ete default-@ object-a, et depqum petqa elementi index-@ key value-n value lcnelov gna

// function myReduce(array, actionFn) {
//   let res;
//   array.forEach((element) => {
//     actionFn(element);
//   });
// }

function myReduce(array, acc, item, index, def = {}) {
  if (def instanceof Object && !Array.isArray(def)) {
    let res = {};
    array.forEach((element, index) => {
      res[index] = element;
    });
    return res;
  }
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
// console.log(1 instanceof Object);
