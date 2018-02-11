// MongoDB
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = 'mongodb://root:123456@ds225608.mlab.com:25608/doublebird';
var dbName = 'doublebird';

var dbUtil = {
    insert: function (obj) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (err, client) {
                assert.equal(null, err);
                // console.log("Connected successfully to server");
                var db = client.db(dbName);

                db.collection("user").insertOne(obj, function (err, res) {
                    if (err) {
                        throw err;
                    } else {
                        return resolve("文档插入成功");
                    }
                })
                client.close();
            });
        })
    },
    delete: function () {
        // 删除
    },
    update: function () {
        // 更新
    },
    find: function (obj) {
        // 查找
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (err, client) {
                assert.equal(null, err);
                // console.log("Connected successfully to server");
                var db = client.db(dbName);

                db.collection("user").find(obj).toArray(function (err, result) {
                    if (err) {
                        throw err;
                    } else {
                        return resolve(result.length);
                    }
                    client.close();
                })
            })
        })
    }
}

module.exports = dbUtil;