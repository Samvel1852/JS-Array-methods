let arrOfObjs = [
  { name: "Samvel", age: 40 },
  { name: "Samvel", age: 14 },
  { name: "Samvel", age: 10 },
  { name: "Samvel", age: 20 },
  { name: "Samvel", age: 23 },
  { name: "Samvel", age: 25 },
  { name: "Samvel", age: 26 },
];

function myFind(array, age) {
  for (let i = 0; i < array.length; i += 1) {
    let element = array[i];
    if (element.age === age) {
      return element;
    }
  }
  return -1;
}

console.log(myFind(arrOfObjs, 20));
