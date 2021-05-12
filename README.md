# Array methods in Javascript

There are many methods intended for arrays in javascript. We will discuss the main and often usable methods which are:

-   [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
-   [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
-   [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
-   [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
-   [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
-   [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
-   [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
-   [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
-   [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
-   [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Array.prototype.forEach()
The forEach() method executes a provided function once for each array element.
```javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
### Syntax
```javascript
// Arrow function
forEach((element) => { ... } )
forEach((element, index) => { ... } )
forEach((element, index, array) => { ... } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function callbackFn(element) { ... })
forEach(function callbackFn(element, index) { ... })
forEach(function callbackFn(element, index, array){ ... })
forEach(function callbackFn(element, index, array) { ... }, thisArg)
```

### Parameters

-   **callbackFn:**
Function to execute on each element. It accepts between one and three arguments:

    -   **element:**
The current element being processed in the array.
    -   **index:** *Optional#*
The index of element in the array.
    -   **array:** *Optional#*
The array forEach() was called upon.
-   **thisArg:** *Optional#*
Value to use as this when executing callbackFn.

### Return value

```javascript
undefined
```

## Description

forEach() calls a provided callbackFn function once for each element in an array in ascending index order. It is not invoked for index properties that have been deleted or are uninitialized. (For sparse arrays, see example below.)

callbackFn is invoked with three arguments:

-   the value of the element
-   the index of the element
-   the Array object being traversed

If a thisArg parameter is provided to forEach(), it will be used as callback's this value. The thisArg value ultimately observable by callbackFn is determined according to the usual rules for determining the this seen by a function.

The range of elements processed by forEach() is set before the first invocation of callbackFn. Elements which are appended to the array after the call to forEach() begins will not be visited by callbackFn. If existing elements of the array are changed or deleted, their value as passed to callbackFn will be the value at the time forEach() visits them; elements that are deleted before being visited are not visited. If elements that are already visited are removed (e.g. using shift()) during the iteration, later elements will be skipped. (See this example, below.)

forEach() executes the callbackFn function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

## Array.prototype.slice()

The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

### Syntax

```javascript
slice()
slice(start)
slice(start, end)
```

### Parameters

-   **start:** *Optional#*

Zero-based index at which to start extraction.

A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.

If start is undefined, slice starts from the index 0.

If start is greater than the index range of the sequence, an empty array is returned.

-   **end:** *Optional#*

Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).

A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.

If end is omitted, slice extracts through the end of the sequence (arr.length).

If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).

### Return value

A new array containing the extracted elements.

## Description

slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

-   For object slice copies object references into the new array. Both the original and new array refer to the same object. If an object changes, the changes are visible to both the new and original arrays.
-   For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number, or boolean in one array do not affect the other array.

If a new element is added to either array, the other array is not affected.

### Examples

#### Return a portion of an existing array

```javascript
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```
#### Using slice

In the following example, slice creates a new array, newCar, from myCar. Both include a reference to the object myHonda. When the color of myHonda is changed to purple, both arrays reflect the change.

```javascript
// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)
```
This script writes:

```javascript
myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
         'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

## Array.prototype.splice()

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

### Syntax

```javascript
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

### Parameters

-   **start:**
The index at which to start changing the array.
If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.
If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.

-   **deleteCount:** *Optional#*
An integer indicating the number of elements in the array to remove from start.
If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted.
If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
-   **item1, item2, ... :** *Optional#* The elements to add to the array, beginning from start. If you do not specify any elements, splice() will only remove elements from the array.

### Return value

An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.

## Description

If the specified number of elements to insert differs from the number of elements being removed, the array's length will be changed.

## Examples

### Remove 0 (zero) elements before index 2, and insert "drum"

```javascript
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

#### Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

```javascript
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

## Conclusion

The array methods in Javascript are very useful, if you want to learn more please click on the names provided above in the unordered list of the method names. Also you can [click here](https://javascript.info/array-methods) for more.
