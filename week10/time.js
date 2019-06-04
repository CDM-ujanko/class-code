let now = new Date();
let date = new Date(1559573989);
let date1 = new Date('December 17, 1995 03:24:00');

console.log(now);
console.log(date);
console.log(date1);

console.log(now.getFullYear());
console.log('UTC TIME h:mm ', now.getUTCHours() + ':' + now.getUTCMinutes());
console.log(date.getFullYear());
console.log(date1.getFullYear());

console.log(now.getMilliseconds());

var trtYearsAgo = new Date();
trtYearsAgo.setFullYear(now.getFullYear() - 35);
console.log(trtYearsAgo);

trtYearsAgo.setMonth(11);

console.log(trtYearsAgo);

let momnetNow = moment();
console.log(momnetNow.format('dddd'));
console.log(momnetNow.format('MMM Do YY'));

console.log(momnetNow.subtract(35, 'years'));
