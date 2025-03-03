let mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];

// Your code here
let newArr = [];
for (let i = 0; i < mix.length; i++) {
  newArr.push(typeof (mix[i]));
}

console.log(newArr);