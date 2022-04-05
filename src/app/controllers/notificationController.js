const Notification = require('../models/notificationModel')

class NotificationController {
    allNotification(req, res) {
        Notification.find({}).lean()
            .then((notifications) => {
                res.render('notification/notification', {notifications})
            })
    }

    addNotification(title, content, type) {
        let newNotification = new Notification({
            title: title, 
            content: content, 
            type: type
        })

        newNotification.save()
            .then()
            .catch()
    }

    removeNotification(req, res) {
        let notificationID = req.body.notificationID
        Notification.deleteOne({_id: notificationID})
            .then(() => {
                res.redirect('/notification')
            })
    }
    
}

module.exports = new NotificationController();