var express = require('express');
const { route } = require('../app');
var router = express.Router();

const userController = require('../app/controllers/userController')


router.get('/users/login', function (req, res) {
 res.render('users/login', {layout: false});
});


    /* GET users listing. */
router.get('/signup', function(req, res, next) {
    res.render('users/signup')
});

router.post('/signup', userController.addUser);
module.exports = router;