// Your code here
function matrixBuilder(number) {
  // length debe se igual al numero
  let matrix = [];
  for (let i = 0; i < number; i++) {
    matrix.push([]);
    for (let x = 0; x < number; x++) {
      matrix[i].push(Math.floor(Math.random() + 0.5));
    }
  }
  return matrix;
}


// Do not change anything from this line down
console.log(matrixBuilder(5));