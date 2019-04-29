window.addEventListener('load', (event) => {
  console.log('the page has loaded!', event);
  const btn = document.querySelector('.button');
  console.log(btn);

  btn.addEventListener('click', myButtonHasBeenPressed);

  document.body.addEventListener('click', function (event) {
    console.log('body event listener', event.target);
  });
});

function myButtonHasBeenPressed(event) {
  console.log('Add event listener', event);
}


$('ready', function(jq, event) {
  $('.jq-button').click(function (e) {
    console.log('Click on the jquery element', e)
  });
});

