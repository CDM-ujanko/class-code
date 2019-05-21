$.ajax({
    url: 'https://my-json-server.typicode.com/it238-sp-2019/db-test/db',
    method: 'GET'
}).done(function (resp) {
    console.log(resp.colors[3]);
})