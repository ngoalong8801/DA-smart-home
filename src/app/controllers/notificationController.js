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
    
}

module.exports = new NotificationController();