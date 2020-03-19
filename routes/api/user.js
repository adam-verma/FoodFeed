const express = require('express'),
    router = express.Router(),
    db = require('../../models');

router.get('/',
    require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {

        if(req.query.username){
            db.User.findOne({
                username : req.query.username
            },(err, user) => {
                if (err)
                    return;
                if (user) {
                    res.json({
                        stream_key : user.stream_key
                    });
                }
            });
        }else{
            res.json({});
        }
    });

module.exports = router;