console.log('Week 3 code!');

// For loop example
for (var i = 0; i < 10; i++) {
  console.log('Our i is ', i);
}

// While loop
var m = 0;
while (m < 3) {
  m = m + 123;
  // console.log(m)
}

let arr = ['one', 'two', 'seven']
// let arr2 = []

// for (var i = 0; i < 2; i++) {
//   arr2.push(arr[i])
// }

// console.log(arr2);


// While with break
// var x = 0;
// while (true) {
//   console.log(x);
//   if (x >= 5) {
//     break;
//   }
//   x++
// }

// While with continue
// while (x < 10) {
//   x++;
//   if (x === 3 || x === 4) {
//     continue;
//   }
//   console.log(x);
// }

// label example
// let i = 0;
// outerLoop:
// while (i < 10) {
//   let j = 0;
//   i++;
//   console.log('i', i);
//   while (j < 5) {
//     j++;
//     console.log('j', j);
//     i += j;
//     if (j === 2) {
//       break;
//     }
//   }
// }
var obj = {name: 'Bob', age: 27, job: 'Developer'}

// for (key in obj) {
//   console.log(obj[key]);
// }

// arr.forEach(function(el) {
//   console.log(el);
// })

// Get the keys form obj
console.log(Object.keys(obj));

// console.log(i);