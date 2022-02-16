// 1. Please write a function that shows the usage of closures

const show = (closures) => closures;

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const sum = (arr) => arr.reduce((prev, current) => prev + current, 0);
console.log("--------------------------------------");
console.log(`Sum: ${sum([9, 1, 22, 0, 2])}`);

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flatten = (arr) => {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc = [...acc, item];
    }
    return acc;
  }, []);
};

console.log("--------------------------------------");
console.log(
  `Flatten: ${flatten([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5])}`
);

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]
const common = (arr1, arr2) => arr1.filter((arr1) => arr2.includes(arr1));

console.log("--------------------------------------");
console.log(
  `Common: ${common(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])}`
);

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

let different = (arr1, arr2) =>
  arr1
    .filter((arr1) => !arr2.includes(arr1))
    .concat(arr2.filter((arr2) => !arr1.includes(arr2)));

console.log("--------------------------------------");
console.log(
  `Different: ${different(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"])}`
);

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const tuples = (arr1, arr2) => {
  let arrTest = [];
  arr1.reduce((acc, item, currentIndex) => {
    const test = [item, arr2.at(currentIndex)];
    arrTest = [...arrTest, test];
  }, []);

  return arrTest;
};

console.log("--------------------------------------");
console.log(`Tuples: ${tuples([1, 2, 3], [4, 5, 6, 7])}`);

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const pathTo = (path, object) =>
  path.reduce((object, key) => object?.[key], object);

console.log("--------------------------------------");
console.log(
  `pathTo: ${pathTo(["a", "b", "c", "d"], { a: { b: { c: { d: "23" } } } })}`
);

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const equality = (obj1, obj2) =>
  Object.keys(obj1).length === Object.keys(obj2).length;

console.log("--------------------------------------");
console.log(`Equality: ${equality({ a: "b", c: "d" }, { c: "d", a: "b" })}`);
console.log(
  `Equality: ${equality({ a: "c", c: "a" }, { c: "d", a: "b", q: "s" })}`
);

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const filterObj = (filter, obj) => {
  return Object.keys(obj)
    .filter((key) => !filter.includes(key))
    .reduce((item, key) => {
      item[key] = obj[key];
      return item;
    }, {});
};

console.log("--------------------------------------");
console.log(
  `FilterObj: ${filterObj(["color", "size"], {
    color: "Blue",
    id: "22",
    size: "xl",
  })}`
);
