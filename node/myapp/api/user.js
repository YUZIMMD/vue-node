var express = require('express');
var router = express.Router();
var sql = require('../db/sql_com');
var sql_mapping = require('../db/sql_mapping');

module.exports.login = function(req, res) {
    sql._fun.query(sql_mapping.sql_mapping.user.query_user, function(err, rows) {
        if (err) {
            console.log(err);
            sql._fun.failure(err, function(result) {
                res.json(result.code);
            });
        } else {
            sql._fun.success(rows, function(result) {
                res.json(result);
            });
        }
    });
};