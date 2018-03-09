var express = require('express');
var router = express.Router();
var api = require('../api/user');

/* GET users listing. /users路由*/
router.get('/users', function(req, res, next) {
    api.login(req, res);
});
module.exports = router;