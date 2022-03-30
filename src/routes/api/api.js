var express = require('express');
var passport = require('passport');
var initPassportLocal = require('./passport');
const userController = require('../../app/controllers/userController')
const SiteController = require('../../app/controllers/siteController')

var router = express.Router();
initPassportLocal();


// router.get('/checkLogin', passport.authenticate("local"))

router.post('/login', passport.authenticate("local"), function(req, res) {
    res.send('ok')
})

router.get('/checkLogin', SiteController.requireLoginAPI, function (req, res) {
    res.send({loggedIn: true})
} )

router.get('/logout', function (req, res, next) {
    req.session.destroy(function (err) {
        return res.send('ok')
    });
})


router.get('/getAllUser', SiteController.requireLoginAPI, function (req, res) {
    userController.getAllUsers(req, res)
});


router.post('/createUser', SiteController.requireLoginAPI, userController.addUser)
router.post('/removeUser', SiteController.requireLoginAPI, userController.deleteUser)
module.exports = router;