
var express = require('express');
var router = express.Router();


router.get('/management', function (req, res) {
    res.render('management/user_management')
})



module.exports = router;