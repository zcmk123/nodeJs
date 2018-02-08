// MongoDB
var MongoClient = require('mongodb').MongoClient,
assert = require('assert');

var url = 'mongodb://root:123456@ds225608.mlab.com:25608/doublebird';
var dbName = 'doublebird';

var dbUtil = {
    insert : function () {
            MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            var db = client.db(dbName);

            db.collection("user").insertOne({ name: "菜鸟教程", url: "www.runoob" }, function (err, res) {
                if (err) throw err;
                console.log("文档插入成功");
            })
            client.close();
          });
    },
    delete : function () {
        // 删除
    },
    update : function () {
        // 更新
    },
    find : function () {
        // 查找
    }
}

module.exports = dbUtil;