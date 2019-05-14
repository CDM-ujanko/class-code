const todo = document.querySelector(".todo");
const input = document.querySelector(".item");
const add = document.querySelector(".add");

let data = {
  name: 'My Todo',
  items: [
    'Grade hw 4',
    'Buy milk',
    'Pay bills',
    'Go to work'
  ]
}

let tempalte = `
  {{name}}
  <ul>
  {{#each items}}
    <li>{{this}}</li>
  {{/each}}
  </ul>
`

function render(context) {
  // var source = todo.innerHTML;
  console.log('SOURCE:', tempalte);
  let compiled = Handlebars.compile(tempalte);
  console.log('compiled:', compiled);
  todo.innerHTML = compiled(context);
  console.log('compiled(data):', compiled(context));
}

render(data);

function addEventHandler() {
  let val = input.value;
  data.items.push(val);
  console.log(val);
  render(data);
}

add.addEventListener('click', addEventHandler)


// const templateElement = document.getElementById("entry-template");

// function render(context) {
//   let template = `
//     <div class="entry">
//       <h1>{{title}}</h1>
//       <div class="body">
//         {{body}}
//       </div>

//       <ul>
//       {{#each lines}}
//         <li>{{this}}</li>
//       {{/each}}
//       </ul>
//     </div>
// `;

//   let compiled = Handlebars.compile(template);
//   templateElement.innerHTML = compiled(context);
// }

// let context = {
//   title: 'My New Post',
//   body: 'This is my first post!',
//   lines: ['one', 'two']
// };

// function addItem(event) {
//   const input = document.querySelector('.text');
//   console.log('adding', input.value);
//   context.lines.push(input.value);
//   console.log(context);
//   render(context);
// }

// render(context);
// const btn = document.querySelector('.add');
// console.log(btn);
// btn.addEventListener('click', addItem);

