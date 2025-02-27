let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (let i = 0; i < par.length; i++) {
  if (par[i].toLowerCase() in counts) {
    counts[par[i].toLowerCase()] += 1;
  } else if (par[i].toLowerCase() == " ") {
    continue;
  } else {
    counts[par[i].toLowerCase()] = 1;
  }
}

console.log(counts);