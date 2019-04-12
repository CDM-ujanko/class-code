if (1 >= 2) {
    // code
    console.log('1 is smaller than 0');
} else if ( true) {
    // console.log('1 is smaller than 0');
    console.log('I want this to show up!');
} else {
    console.log('else');
}

var smth = "soMething";

if (!(smth == "soMething" && !(smth == "Something" || smth == "something"))) {
    console.log('They are equal');
}

var statement = 1 === 1 && 2 === 2 || 3 === 34;

if (!statement) {
    console.log('My statement is true!');
}

if (2 != "2") {
    console.log('A sting is eaual to a number!');
}

if (confirm('Are you sure about that?')) {
    alert('Well ok then!')
}

