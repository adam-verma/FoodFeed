const express = require("express");
const router =  express.Router();
const vController = require("../../controllers/ViewerController");
const model = require("../../models/Streamer");

router.get("/streamers", (req, res) => {
    // model.find()
    //     .sort({date: -1 })
    //     .then( entries => res.json(entries))
    //     .catch((error => res.json(error)));
    console.log("HEYO I WORK");
    


});

router.route("/asdf")
        .get(vController.findAll)





module.exports = router;