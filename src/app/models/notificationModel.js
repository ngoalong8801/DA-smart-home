const mongoose = require('mongoose');


const notification = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    type: {
        type: String
        //danger - warning - inform
    }
});

module.exports = mongoose.model('notification', notification);