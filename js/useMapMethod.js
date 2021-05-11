// Your function must use map method

// Write a function which returns array of usernames.

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

function getUserNames(arr) {
  let tempArr = arr;
  tempArr = tempArr.map((item) => item.username);
  return tempArr;
}

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']

// Write a function which returns array of lengths of user names

function getUsernameLengths(arr) {
  let tempArr = arr;
  tempArr = tempArr.map((item) => item.username.length);
  return tempArr;
}

console.log(getUsernameLengths(users)); // [12, 13])
