const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    shortid = require('shortid'),
    db = require('../models');

    
 
passport.serializeUser( (user, cb) => {
    cb(null, user);
});
 
passport.deserializeUser( (obj, cb) => {
    cb(null, obj);
});
 
// Passport strategy for handling user registration
passport.use('localRegister', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, email, password, done) => {
        db.User.findOne({$or: [{email: email}, {username: req.body.username}]},  (err, user) => {
            if (err)
                return done(err);
            if (user) {
                if (user.email === email) {
                    req.flash('email', 'Email is already taken');
                }
                if (user.username === req.body.username) {
                    req.flash('username', 'Username is already taken');
                }
 
                return done(null, false);
            } else {
                let user = new db.User;
                console.log(user); 
                user.email = email;
                user.password = user.generateHash(password);
                user.username = req.body.username;
                user.stream_key = shortid.generate();
                user.save( (err) => {
                    if (err)
                        throw err;
                    return done(null, user);
                });
            }
        });
    }));
 
// Passport strategy for authenticating users
passport.use('localLogin', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, email, password, done) => {
 
        db.User.findOne({'email': email}, (err, user) => {
            if (err)
                return done(err);
 
            if (!user)
                return done(null, false, req.flash('email', 'Email doesn\'t exist.'));
 
            if (!user.validPassword(password))
                return done(null, false, req.flash('password', 'Oops! Wrong password.'));
 
            return done(null, user);
        });
    }));
 
 
module.exports = passport;