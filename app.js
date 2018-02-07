var express = require('express');

var router = express.Router();

var app = express();

app.use(express.static('static'));

// app.use('/', router);

// // 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
// router.use('/', function (req, res, next) {
//     console.log('Time:', Date.now());
//     next();
// });

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});