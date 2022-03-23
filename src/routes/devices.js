
var express = require('express');
var router = express.Router();


router.get('/:id/aircondition', function (req, res) {
    res.render('devices/aircondition')
})

router.get('/:id/gasconcentration', function (req, res) {
    res.render('devices/gasconcen')
})


module.exports = router;