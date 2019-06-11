const productElement = document.querySelector('.products');
const totalElement = document.querySelector('.total');

let products = [],
    cart = [];

let template = `
    {{#each products}}
    <div class="product">
        <p>{{title}}</p>
        {{#if added}}
          <button class="remove" onclick="removeFromCart({{ @index }})">Remove from cart</button>
        {{else}}
          <button class="add" onclick="addToCart({{ @index }})">Add to cart</button>
        {{/if}}
    </div>
    {{/each}}
`;

/**
 * Renders the template with the given data.
 * @param context The date to render.
 */
function render(context) {
  let compiled = Handlebars.compile(template);
  productElement.innerHTML = compiled(context);
}
function getProducts() {
  $.ajax({
    type: 'GET',
    url: 'http://5ceb36a60c871100140bf873.mockapi.io/v1/item?p=1&l=10',
    success: function (resp) {
      console.log(resp);
      products = resp.map((p) => {
        p.added = false
        return p;
      });


      render({products: products})
    } 
  });
}

function addToCart(i) {
  console.log('Adding item to cart!');
  console.log('I got index', i);
  console.log('I am adding',products[i]);
  cart.push(products[i]);
  localStorage.setItem('cart', JSON.stringify(cart));
  products[i].added = true;

  let total = cart.reduce(((acc, curr) => acc + parseFloat(curr.price)), 0)
  totalElement.textContent = '$' + total.toFixed(2);

  render({products: products})
}

getProducts();
