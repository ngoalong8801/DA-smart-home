var express = require('express');
var router = express.Router();

router.get('/:id/room', function(req, res) {
    var user = {}
    if (req.user) {
        user = JSON.parse(JSON.stringify(req.user));
    }
    res.render('/room/room', { user: user })
})