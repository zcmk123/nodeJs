var express = require('express');

var router = express.Router();

var url = require('url');

var info = require('../model/getinfo');

var dbUtil = require('../model/mongodb');

router.get('/getinfo', function (req, res) {
    // var employees = info.getInfo();
    res.jsonp(info.getTime());
    res.end();
})

router.get('/setopenid', function (req, res) {
    var jsCode = url.parse(req.url, true).query.jsCode;
    info.setOpenId(jsCode, res);
    // res.jsonp(openid);
})

router.get('/mongo', function (req, res) {
    // 连接数据库
    dbUtil.insert();
    res.end();
})

module.exports = router;