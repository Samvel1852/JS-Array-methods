// Your function must use reduce

// Given an array, return the sum of numbers that are 18 or over.

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

function sumOfOver18(array) {
  let tempArr = array;
  let sumOver18 = tempArr.reduce((acc, item) => {
    if (item > 18) {
      acc += item;
    }
    return acc;
  }, 0);
  return sumOver18;
}

console.log(sumOfOver18(arr));

// Write a function which calculates average age of users.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(arr) {
  let tempArr = arr;
  let ageSum = tempArr.reduce((acc, item) => acc.age + item.age);
  let userCount = tempArr.reduce((acc) => {
    acc += 1;
    return acc;
  }, 0);
  let average = ageSum / userCount;
  return average;
}

console.log(getAverageAge(users)); // 55
