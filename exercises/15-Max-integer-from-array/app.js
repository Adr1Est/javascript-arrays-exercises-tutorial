let myArray = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34];

// Your code here
const findMax = (array) => {
  let topNumber = 0;
  array.forEach((e) => {
    if (e > topNumber) {
      topNumber = e;
    }
  });
  return topNumber;
}

console.log(findMax(myArray));