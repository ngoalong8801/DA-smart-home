var express = require('express');
var router = express.Router();


router.get('/:id/aircondition', function(req, res) {
    var user = {}
    if (req.user) {
        user = JSON.parse(JSON.stringify(req.user));
    }
    res.render('devices/aircondition', { user: user })
})

router.get('/:id/gasconcentration', function(req, res) {
    res.render('devices/gasconcen')
})

router.get('/:id/light', function(req, res) {
    res.render('devices/light')
})


module.exports = router;