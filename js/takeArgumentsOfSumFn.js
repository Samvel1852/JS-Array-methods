function sum(...args) {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
console.log(sum(1, 2)); // prints 3
console.log(sum(1, 2, 3)); // prints 6
