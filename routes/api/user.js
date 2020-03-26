const express = require('express'),
    router = express.Router(),
    db = require('../../models');
    userController = require('../../controllers/UserController');

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

router.get('/user/:userId', userController.allowIfLoggedin, userController.getUser);

router.get('/users', userController.allowIfLoggedin, userController.grantAccess('readAny', 'profile'), userController.getUsers);
    
router.put('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('updateAny', 'profile'), userController.updateUser);
    
router.delete('/user/:userId', userController.allowIfLoggedin, userController.grantAccess('deleteAny', 'profile'), userController.deleteUser);

module.exports = router;