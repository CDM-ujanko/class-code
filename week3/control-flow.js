console.log('Week 3 code!');

let i = 0;
outerLoop:
while (i < 10) {
  let j = 0;
  i++;
  console.log('i', i);
  while (j < 5) {
    j++;
    console.log('j', j);
    i += j;
    if (j === 2) {
      break outerLoop;
    }
  }
}

console.log(i);