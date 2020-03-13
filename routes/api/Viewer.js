const express = require("express");
const router =  express.Router();
const vController = require("../../controllers/ViewerController");


// const model = require("../../models/Streamer");




router.route("/")
    .get(vController.findAll);
    






module.exports = router;