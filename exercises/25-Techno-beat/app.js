// Your code here
function lyricsGenerator(array) {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      string += "Drop the bass ";
      if (array[i] === 1 && array[i - 1] === 1 && array[i - 2] === 1) {
        string += "!!!Break the bass!!! ";
      }
    } else {
      string += "Boom "
    }
  }
  return string;
}

// Don't change anything below this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]));
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]));
console.log(lyricsGenerator([0, 0, 0]));
console.log(lyricsGenerator([1, 0, 1]));
console.log(lyricsGenerator([1, 1, 1]));
