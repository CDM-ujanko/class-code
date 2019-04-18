function greetFunc (name) {
    console.log('Hi ', name);
}

function square(x) {
    return x * x;
}

// greetFunc.apply(null, ['Mike']);

var func = function (x) {
    console.log(x)
    return x + x;
    console.log('My code after return!');
}

// var ret = func('Hello');
// console.log(ret);

function factorial(n) {
    if (n > 1) {
        return n * factorial(n-1);
    }
    return 1
}

function defParam(x = 2) {
    console.log(x);
    return x**2;
}

// console.log(defParam());
var m = 6;
function increment(x) {
    return x+1;
}
console.log(increment(m));
console.log(m);

var bobObj = {age: 27, name: 'bob'}

console.log('bobObj', bobObj);

function rename(obj) {
    obj.name = "Sam";
    return obj;
}

// Object copy example
// var bobCopy = {};
// console.log(rename(bobObj));
// console.log(bobObj);
// console.log('bobCopy', bobCopy);

// for (key in bobObj) {
//     console.log(key);
//     bobCopy[key] = bobObj[key];
// }

// console.log('bobCopy after copy', bobCopy);
// console.log('renaming bobObj', rename(bobObj));
// console.log('bobObj', bobObj);
// console.log('bobCopy', bobCopy);

var globalVar = 'Hello from global var!';
function scopeExample() {
    console.log(globalVar);
    var functionVar = 12;
    function innerFunc() {
        console.log('inner func', functionVar);
        console.log('inner func', globalVar);
    }

    
}
scopeExample();
innerFunc();
// console.log(functionVar);