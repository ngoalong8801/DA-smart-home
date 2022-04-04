var express = require("express");
var router = express.Router();
const notificationController = require('../app/controllers/notificationController')


router.get("/", function(req, res) {
    notificationController.allNotification(req, res)
});

module.exports = router;