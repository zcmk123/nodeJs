var express = require('express');

var router = express.Router();

var info = require('../model/getinfo');

var dbUtil = require('../model/mongodb');

router.get('/getinfo', function (req, res) {
    // var employees = info.getInfo();
    res.jsonp(info.getTime());
})

router.get('/mongo', function (req, res) {
    // 连接数据库
    dbUtil.insert();
    res.end();
})

module.exports = router;