const addToBatch = (array, number) => {
  if (array.length < 5) {
    new_array = array.concat(number);
    return new_array;
  } else {
    return array;
  }
}

addToBatch([1], 3); // [ 1, 3 ]

addToBatch([1, 2, 3], 4); // [ 1, 2, 3, 4 ]

addToBatch([], 8); // [ 8 ]

addToBatch([1, 2, 3, 4, 5, 6], 7); // [ 1, 2, 3, 4, 5, 6 ]

addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

module.exports = addToBatch;