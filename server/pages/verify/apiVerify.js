var express = require('express'),
    verify = require('../../../client/js/pages/verify/Verify'),
    bodyParser = require('body-parser'),
    urlParse = bodyParser.urlencoded({
        extended: true
    }),
    jsonParse = bodyParser.json(),
    User = require('../user/userModel'),
    Verify = require('./verifyModel');

var router = module.exports = express.Router();

// base route '/verify'

router.get('/:code', [urlParse, jsonParse], function(req, res) {

    Verify.findOne({
            code: req.params.code
        })
        .exec()
        .then(function(verify) {
            if (!verify) {
                return res.status(500).send({
                    status: 500,
                    errmsg: 'Code not found.'
                });
            }
            User.findOneAndUpdate({
                    _id: verify.user
                }, {
                    verified: true
                }).exec()
                .then(function(user) {
                    verify.remove();
                    // return res.send({
                    //     'msg': 'OK'
                    // });
                    // res.sendFile(path.join(buildDir, 'index.html'));
                    res.redirect('/login');
                }, function(err) {
                    return res.status(500).send(err);
                });
        }, function(err) {
            return res.status(500).send(err);
        });
});
