const express = require("express");
const router = express.Router();1
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/signup");
const validateLoginInput = require("../../validation/login");
// Load Viewer model
const Viewer = require("../../models/Viewer");

// @route POST api/useviewers/signup
// @desc Register user
// @access Public
router.post("/signup", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  Viewer.findOne({ email: req.body.email }).then(viewer => {
      if (viewer) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newViewer = new Viewer({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newViewer.password, salt, (err, hash) => {
            if (err) throw err;
            newViewer.password = hash;
            newViewer
              .save()
              .then(viewer => res.json(viewer))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });



  // @route POST api/viewers/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email;
  const password = req.body.password;
// Find user by email
  Viewer.findOne({ email }).then(viewer => {
    // Check if user exists
    if (!viewer) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, viewer.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: viewer.id,
          name: viewer.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});
  module.exports = router;