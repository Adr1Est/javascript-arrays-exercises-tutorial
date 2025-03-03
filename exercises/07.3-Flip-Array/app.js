let arr = [45, 67, 87, 23, 5, 32, 60];

// Your code here
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.unshift(arr[i]);
}

console.log(newArr);