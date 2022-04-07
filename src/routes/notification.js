var express = require("express");
var router = express.Router();
const notificationController = require('../app/controllers/notificationController')


router.get("/", function(req, res) {
    // notificationController.addNotification("Khi ga ro ri", "Nong do khi ga vuot nguong, nguy hiem", "warning")
    // notificationController.addNotification("Khi ga ro ri", "Nong do khi ga vuot nguong, nguy hiem", "danger")
    notificationController.allNotification(req, res)
});

router.post('/dismiss', notificationController.removeNotification)
module.exports = router;