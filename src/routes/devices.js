<<<<<<< HEAD
var express = require("express");
=======
var express = require('express');
>>>>>>> 39fcf5a0bce5c7ac31c437b4aa0ce4332b4fe7ad
var router = express.Router();
const deviceController = require("../app/controllers/DeviceController");
router.get("/:id/aircondition", function (req, res) {
	var user = {};
	if (req.user) {
		user = JSON.parse(JSON.stringify(req.user));
	}
	res.render("devices/aircondition", {user: user});
});

router.get("/:id/gasconcentration", function (req, res) {
	res.render("devices/gasconcen");
});

<<<<<<< HEAD
router.get("/:id/fan", deviceController.fan);
=======
router.get('/:id/aircondition', function(req, res) {
    var user = {}
    if (req.user) {
        user = JSON.parse(JSON.stringify(req.user));
    }
    res.render('devices/aircondition', { user: user })
})

router.get('/:id/gasconcen', function(req, res) {
    res.render('devices/gasconcen')
})

router.get('/:id/light', function(req, res) {
    res.render('devices/light')
})

router.get('/:id', function(req, res) {
    res.render('room/room')
})


>>>>>>> 39fcf5a0bce5c7ac31c437b4aa0ce4332b4fe7ad

module.exports = router;
