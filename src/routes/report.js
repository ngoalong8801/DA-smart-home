var ReportController = require("../app/controllers/reportController");
var express = require("express");
var router = express.Router();

router.get("/humidity", ReportController.humidity);
router.get("/temparature", ReportController.temparature);
module.exports = router;
