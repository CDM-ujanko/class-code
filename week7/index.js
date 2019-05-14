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

const studentsEl = document.querySelector('.students');

let newHtml = '';

students.forEach(function(el, i) {
  let template = `
  <div class="student">
    <h2>ID:${el.id}</h2>
    <h2>Name:${el.name}</h2>
    <h2>Grade:${el.grade}</h2>
  </div>`

  newHtml += template;
});

studentsEl.innerHTML = newHtml;

