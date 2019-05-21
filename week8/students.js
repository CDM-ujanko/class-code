const studentsElement = document.querySelector('.students');
const searchElement = document.querySelector('.search');

let students = {};
let template = `
    {{#each students}}
    <div class="student">
        <img src={{picture}} />
        <p>{{id}}: {{name}}</p>
        <a href="mailto:{{email}}">{{email}}</a>
        <br />
        <a href="tel:{{phone}}">{{phone}}</a>
        <p>{{address}}</p>
    </div>
    {{/each}}
`

function render(data) {
    console.log(students);
    let compiled = Handlebars.compile(template);
    studentsElement.innerHTML = compiled(data);
}

$.ajax({
    url: 'https://my-json-server.typicode.com/it238-sp-2019/db-test/students',
    method: 'GET'
}).done(function (resp) {
    console.log(resp);
    students = {students : resp}
    render(students);
});

render(students);

searchElement.addEventListener('input', function(event) {
    let val = searchElement.value;
    // console.log(event.target.value, val, this.value);
    let filteredStudents = students.students.filter(function (student) {
        return student.address.toLowerCase().includes(val.toLowerCase());
    })

    render({students: filteredStudents});
});