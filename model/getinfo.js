var https = require('https');

var dbUtil = require('./mongodb');

var request = require('request');

var rp = require('request-promise');

var info = {
    getInfo: function () {
        var employees = [
            { "firstName": "Bill", "lastName": "Gates" },
            { "firstName": "George", "lastName": "Bush" },
            { "firstName": "Thomas", "lastName": "Carter" }
        ];
        return employees;
    },
    getTime: function () {
        var obj = {};
        var time = new Date().toLocaleString();
        obj.time = time;
        return obj;
    },
    /**
     * 设置微信用户唯一识别码OpenId
     * 查询数据库，如果已经存在此用户OpenId则忽略
     * 没有则添加
     */
    setOpenId: function (jsCode, resp) {
        var appid = 'wx5ab890ab211bee33';
        var secret = '760236e7b41f50d7f32ad1025eb4e572';
        var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + jsCode + '&grant_type=authorization_code';

        request(url, function (error, response, results) {
            if (!error && response.statusCode == 200) {
                var results = JSON.parse(results);
                var openid = results.openid;    // 存储openid
                var errcode = results.errcode || true;
                
                if(errcode) {
                    resp.jsonp(results);
                } else {
                    console.log(openid);
                    resp.jsonp(results);
                }
            }
        })
    //     rp(url)
    //         .then(function (htmlString) {
    //             return new Promise((resolve, reject) => {
    //                 if (true) {
    //                     return resolve(JSON.parse(htmlString).openid);
    //                 }
    //             })
    //         }).then(function (oid) {
    //             openid = oid;

    //             return dbUtil.find({ openid: openid });
    //         }).then(function (count) {
    //             if (count == 0) {
    //                 console.log('id不存在---添加');
    //                 console.log(dbUtil.insert({ openid: openid }));
    //             } else {
    //                 console.log('id已存在---do nothing');
    //             }
    //             // 返回给客户端openid
    //             resp.jsonp(openid);
    //         })
    }
}

module.exports = info;