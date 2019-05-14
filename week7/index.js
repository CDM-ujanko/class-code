const templateElement = document.getElementById("entry-template");

function render(context) {
  let template = `
    <div class="entry">
      <h1>{{title}}</h1>
      <div class="body">
        {{body}}
      </div>

      <ul>
      {{#each lines}}
        <li>{{this}}</li>
      {{/each}}
      </ul>
    </div>
`;

  let compiled = Handlebars.compile(template);
  templateElement.innerHTML = compiled(context);
}

let context = {
  title: 'My New Post',
  body: 'This is my first post!',
  lines: ['one', 'two']
};

function addItem(event) {
  const input = document.querySelector('.text');
  console.log('adding', input.value);
  context.lines.push(input.value);
  console.log(context);
  render(context);
}

render(context);
const btn = document.querySelector('.add');
console.log(btn);
btn.addEventListener('click', addItem);

