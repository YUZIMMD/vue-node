// 数据库连接文件
var mysql = require('mysql');
var sql = mysql.createPool({
    user: 'root',
    password: 'root',
    database: 'nodeDB',
    dateStrings: true
});
module.exports.sql = sql;