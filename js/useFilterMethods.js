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

// Write a function which remove users with language equals to 'ru'.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function filterUsers(arr) {
  let tempArr = arr;
  tempArr = tempArr.filter((item) => item.lang !== "ru");
  return tempArr;
}

console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]

// Write a function which filters object by field.

const users1 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(arr) {
  let tempArr = arr;
  tempArr = tempArr.filter((item) => item.isAstronaut);
  return tempArr;
}

console.log(filterByField(users1, "isAstronaut")); // [{ username: "Yuri Gagarin",
// lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"
// }]
