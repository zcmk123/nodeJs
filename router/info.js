var express = require('express');

var router = express.Router();

var info = require('../model/getinfo');

// controller--getinfo
// router.use('/getinfo', require('../model/getinfo'));

router.get('/', function (req, res) {
    // var employees = info.getInfo();
    res.jsonp(info.getTime());
})

module.exports = router;