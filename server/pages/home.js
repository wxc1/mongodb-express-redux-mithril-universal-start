var express = require('express'),
    home = require('../../client/js/pages/Home'),
    sendPage = require('../utils/sendPage');

// var pages = module.exports = express();
var router = module.exports = express.Router();

router.get('/', function(req, res) {
    sendPage(res, home);
});