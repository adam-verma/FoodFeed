const db = require('../models');
const roles = require('../scripts/roles');

// Defining methods for the StreamerController
module.exports = {
    find: function(req, res) {
        db.User
            .find(req.query)
            .then(dbStreamers => res.json(dbStreamers))
            .catch(err => res.status(422).json(err));
    },
    getUsers: async (req, res, done) => {
    const users = await User.find({});
    res.status(200).json({
        data: users
    });
    },
        
    getUser: async (req, res, done) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) return done(new Error('User does not exist'));
        res.status(200).json({
        data: user
        });
    } catch (error) {
        done(error)
    }
    },
        
    updateUser: async (req, res, done) => {
    try {
        const update = req.body
        const userId = req.params.userId;
        await User.findByIdAndUpdate(userId, update);
        const user = await User.findById(userId)
        res.status(200).json({
        data: user,
        message: 'User has been updated'
        });
    } catch (error) {
        done(error)
    }
    },
    
    deleteUser: async (req, res, done) => {
    try {
        const userId = req.params.userId;
        await User.findByIdAndDelete(userId);
        res.status(200).json({
        data: null,
        message: 'User has been deleted'
        });
    } catch (error) {
        done(error)
    }
    },
 
    grantAccess: function(action, resource) {
    return async (req, res, done) => {
    try {
    const permission = roles.can(req.user.role)[action](resource);
    if (!permission.granted) {
        return res.status(401).json({
        error: "You don't have enough permission to perform this action"
        });
    }
    done()
    } catch (error) {
    done(error)
    }
    }
    },
    allowIfLoggedin: async (req, res, done) => {
    try {
    const user = res.locals.loggedInUser;
    if (!user)
    return res.status(401).json({
        error: "You need to be logged in to access this route"
    });
    req.user = user;
    done();
    } catch (error) {
    done(error);
    }
    }   
}
