const User = require('../models/userModel');


class UserController {
    addUser(req, res) {
        let newUser = new User({
            fullName: req.body.fullName,
            userName: req.body.userName,
            password: req.body.password
        })

        newUser.save()
            .then(() => res.redirect('signup'))
            .catch(err => res.json(err))
    }

    getPageLogin(req, res, next) {
        res.render('users/login', {layout: false});
    }

    checkLogOut(req, res, next) {
        if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
    }


}

module.exports = new UserController();