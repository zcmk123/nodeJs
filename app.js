var express = require('express');

var app = express();

var info = require('./router/info');

app.use(express.static('static'));

app.use(require('./router/info'));

// // 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
// router.use('/', function (req, res, next) {
//     console.log('Time:', Date.now());
//     next();
// });

// 处理404
// app.use(function (req, res, next) {
//     res.status(404).send('404 NOT FOUND !!!');
// });

var server = app.listen(process.env.PORT, function () {   

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});    
