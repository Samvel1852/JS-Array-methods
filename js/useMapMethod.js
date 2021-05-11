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

// Write a function which parses string integers. If it's not possible to
// parse, then add null

function parseInteger(arr) {
  let tempArr = arr;
  tempArr = tempArr.map((item) => (parseInt(item) ? parseInt(item) : null));
  return tempArr;
}

console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323];)
