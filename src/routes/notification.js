
var express = require('express');
var router = express.Router();


router.get('/notification', function (req, res) {
    res.render('notification/notification')
})



module.exports = router;