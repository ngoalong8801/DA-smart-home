var express = require('express');

var router = express.Router();

const userController = require('../../app/controllers/userController')


router.get('/getAllUser', function (req, res) {
    userController.getAllUsers(req, res)
});

router.post('/createUser', userController.addUser)
router.post('/removeUser', userController.deleteUser)
module.exports = router;