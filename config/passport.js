const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Viewer = mongoose.model("viewers");
const keys = require("../config/keys");
const opts = {};
// const db = require("../models/")
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Viewer.findById(jwt_payload.id)
        .then(viewer => {
          if (viewer) {
            return done(null, viewer);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};