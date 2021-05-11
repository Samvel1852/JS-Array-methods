// Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:

function sortArrayAs(arr, str) {
  let tempArr = arr;
  if ((str = "Asc")) {
    tempArr.sort((a, b) => (a > b ? 1 : -1));
  }
  if ((str = "Desc")) {
    tempArr.sort((a, b) => (a > b ? -1 : 1));
  }
  return tempArr;
}

console.log(sortArrayAs([5, 3, 79, 2, 4, 56, 3, 9, 0], "Desc"));
