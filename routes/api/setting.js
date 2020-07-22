const express = require('express'),
    router = express.Router(),
    db = require('../../models'),
    shortid = require('shortid');
 
router.get('/stream_key',
    require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        db.User.findOne({email: req.user.email}, (err, user) => {
            if (!err) {
                res.json({
                    stream_key: user.stream_key
                })
            }
        });
    });
 
router.post('/stream_key',
    require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
 
        db.User.findOneAndUpdate({
            email: req.user.email
        }, {
            stream_key: shortid.generate()
        }, {
            upsert: true,
            new: true,
        }, (err, user) => {
            if (!err) {
                res.json({
                    stream_key: user.stream_key
                })
            }
        });
    });
 
 
module.exports = router;