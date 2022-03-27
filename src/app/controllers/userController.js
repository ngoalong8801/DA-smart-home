const { use } = require('../../app');
const User = require('../models/userModel');


class UserController {
    addUser(req, res) {
        let newUser = new User({
            fullName: req.body.fullName,
            userName: req.body.userName,
            password: req.body.password
        })

        newUser.save()
            .then(() => res.send("ok"))
            .catch(err => {console.log("dfs"); res.json(err)})
    }

    deleteUser(req, res) {
        let userID = req.body.userID
        console.log(req.body)
        User.deleteOne({_id: userID})
            .then(() => {
                res.send("deleted")
            })
            .catch(() => {
                res.send("cannot delete")
            })
    }

    getAllUsers(req, res) {
        User.find({})
            .then(function(doc) {
                res.send(doc)
            })
    }
}

module.exports = new UserController();