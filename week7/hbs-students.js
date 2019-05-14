const template = document.getElementById("template");

let students = [
  {
    id: 007,
    name: 'Bob',
    grade: 'F'
  }, {
    id: 12873,
    name: 'John Snow',
    grade: 'F-'
  }, {
    id: 1235,
    name: 'Ned',
    grade: 'dead'
  },
]

let data = {
  students: students
}

var source   = document.getElementById("template").innerHTML;
let compiled = Handlebars.compile(source);
template.innerHTML = compiled(data);