window.addEventListener('load', (event) => {
  console.log('the page has loaded!', event);
  const btn = document.querySelector('.button');
  console.log(btn);
  btn.onclick = function () {
    document.body.style.background = 'blue';
    console.log('I have been clicked!');
  }

  function resizeHandler(event) {
    if (window.innerWidth > 500) {
      document.body.style.background = 'red';
    } else {
      document.body.style.background = 'silver';
    }
  };
  window.addEventListener('resize', resizeHandler);

  document.querySelector('.remove-event').addEventListener('click', function (event) {
    window.removeEventListener('resize', resizeHandler);
  });

  let multiEventButton = document.querySelector('.multi-event');
  multiEventButton.onclick = function () {
    console.log('function 1');
  } 

  multiEventButton.onclick = function () {
    console.log('function 2');
  }

  let multiEventButton2 = document.querySelector('.multi-event2');
  multiEventButton2.addEventListener('click', function () {
    console.log('function 1');
  });

  multiEventButton2.addEventListener('click', function () {
    console.log('function 2');
  });

  document.body.addEventListener('click', function (event) {
    console.log('body event listener', event.target);
  });
});



function myButtonHasBeenPressed(event) {
  // console.log('Add event listener', event);
  console.log(event);
  $('body').css('background', 'yellow');
}


$('ready', function(jq, event) {
  $('.jq-button').click(function (e) {
    console.log(e);
    document.body.style.background = 'purple';
  });

  $('.myColors').change(function (event) {
    console.log(event.target.value);
    $('body').css('background', event.target.value);
  });
});

