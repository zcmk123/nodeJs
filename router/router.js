var express = require('express');

var router = express.Router();

var url = require('url');

var info = require('../model/getinfo');

var http = require('http');

// 路由

router.get('/getinfo', function (req, res) {
    // var employees = info.getInfo();
    res.jsonp(info.getTime());
    res.end();
})

/**
 * 获取openid
 */
router.get('/getopenid', function (req, res) {
    var jsCode = url.parse(req.url, true).query.jsCode;
    info.getOpenId(jsCode, res);
    // res.jsonp(openid);
})

/**
 * 查询数据库、增加openid
 */
router.get('/setopenid', function (req, res) {
    var oid = url.parse(req.url, true).query.openid;
    info.setOpenid(oid, res);
})

/**
 * 接收处理发布的拼车信息
 */
router.post('/postinfo', function (req, res) {
    var postData = req.body;
    info.postInfo(postData, res);
})

router.get('/sendqq', function (req, res) {
    var msg = url.parse(req.url, true).query.msg;

    if (msg === '') {
        return;
    }
    console.log(msg);

    var rr = {
        "group_uin": 99827458,      // 4180075406       //sak 99827458
        "content": "[\""+ msg + "\",[\"font\",{\"name\":\"宋体\",\"size\":10,\"style\":[0,0,0],\"color\":\"000000\"}]]",
        "face": 678,
        "clientid": 53999199,/*出于安全考虑隐去真实数字，换以同长数字*/
        "msg_id": 93500001,
        "psessionid": "8368046764001d636f6e6e7365727665725f77656271714031302e3133332e34312e383400001ad00000066b026e040015808a206d0000000a406172314338344a69526d0000002859185d94e66218548d1ecb1a12513c86126b3afb97a3c2955b1070324790733ddb059ab166de6857"/*出于安全考虑隐去psessionid*/
    };

    var contents2 = encodeURI('r=' + JSON.stringify(rr));
    sendMsg(contents2);
    function sendMsg (contents) {

        var options = {
            host: "d1.web2.qq.com",
            method: "POST",
            path: "/channel/send_qun_msg2",
            headers: {
                'Host': 'd1.web2.qq.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Referer': 'https://d1.web2.qq.com/cfproxy.html?v=20151105001&callback=1',
                'Content-Length': contents.length,
                'Cookie': 'gv_pvi=9353434112; RK=FXWji6orOk; ptcz=71e922ebd1c054491eddde362381b96460a4692abc8f3e81b982c822a3c1a13f; pt2gguin=o0214778293; pgv_pvid=6409086592; _ga=GA1.2.1460658495.1516273831; tvfe_boss_uuid=5a05e6327eb3fe30; o_cookie=214778293; pac_uid=1_214778293; eas_sid=v1t5m1Q9L7n2y4U1b1H08810e9; 3g_guest_id=-8767845485802143744; g_ut=2; uin=o0214778293; ptisp=ctc; pgv_si=s2342468608; skey=@ehxNtOPY3; p_uin=o0214778293; pt4_token=XdwdjQTyj5VCWRUxMRyH5ugcpjlCBUTR8zvZGTxdEcU_; p_skey=W5M-KN3DDFGEtzkKpM0ExpExlq*o1En6yPHRIrubP2g_',/*出于安全考虑隐去cookie*/
                'Connection': 'keep-alive'
            }
        };
        var requ = http.request(options, function (resp) {
            // res.on('data', function (body) {
            //     if (body.toString().search('<html>') === -1) {/*此处是为了避免长时间未收到数据导致程序直接崩溃*/
            //         var str;
            //         str = JSON.parse(body.toString());/*解析响应体为JSON格式*/
            //         console.log("接受消息  " + str.result[0].value.content);/*获得接受内容*/
            //     }
            // })

        });
        requ.write(contents);
        requ.end();
    };
    
})

module.exports = router;