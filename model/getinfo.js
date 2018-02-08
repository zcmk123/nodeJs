var info = {
    getInfo : function () {
        var employees = [
            { "firstName": "Bill", "lastName": "Gates" },
            { "firstName": "George", "lastName": "Bush" },
            { "firstName": "Thomas", "lastName": "Carter" }
        ];
        return employees;
    },
    getTime : function () {
        var obj = {};
        var time = new Date().toLocaleString();
        obj.time = time;
        return obj;
    }
}

module.exports = info;