
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/it238-sp-2019/db-test/db'

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let jsonDta = JSON.parse(xhr.responseText);
    console.log(jsonDta.colors[3]);
  }
};

// // Method, url async
xhr.open('GET', url, true);
xhr.send();