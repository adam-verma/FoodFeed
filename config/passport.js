const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/Schema').User,
    shortid = require('shortid');
 
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
        User.findOne({$or: [{email: email}, {username: req.body.username}]},  (err, user) => {
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
                let user = new User();
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
 
        User.findOne({'email': email}, (err, user) => {
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















//Old code will delete when the new code make the connection

// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const mongoose = require("mongoose");
// const Viewer = mongoose.model("viewers");
// const keys = require("../config/keys");
// const opts = {};
// // c};onst db = require("../models/")
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = keys.secretOrKey;
// module.exports = passport => {
//   passport.use(
//     new JwtStrategy(opts, (jwt_payload, done) => {
//       Viewer.findById(jwt_payload.id)
//         .then(viewer => {
//           if (viewer) {
//             return done(null, viewer);
//           }
//           return done(null, false);
//         })
//         .catch(err => console.log(err));
//     })
//   );
