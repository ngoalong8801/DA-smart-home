const Notification = require('../models/notificationModel')
var fetch = require("node-fetch")

class NotificationController {
    allNotification(req, res) {
        Notification.find({}).sort({createdAt: 'desc'}).lean()
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

    checkGasConcen() {
        //////////// check gas concentration
        setInterval(() => {
            fetch('https://io.adafruit.com/api/v2/DAFS/feeds/gas/data', {
                method: 'GET', // or 'PUT'
            })
                .then(response => response.json())
                .then(data => {
                    // console.log('Success:', data[0]);
                    if (data[0].value > 600) {
                        this.addNotification("Khi gas ro ri", "Nong do khi ga vuot muc cho phep, vui long tru an an toan", "danger")
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }, 5000)
/////////////////////////////////////
    }
    
}

module.exports = new NotificationController();