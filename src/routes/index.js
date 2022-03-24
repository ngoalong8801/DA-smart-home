const siteRoutes = require('./site')
const userRoutes = require('./users')
const deviceRoutes = require('./devices')
const managementRoutes = require('./management')
const notificationRoutes = require('./notification')

function route(app) {
    app.use('/', siteRoutes);
    app.use('/', userRoutes)
    app.use('/', deviceRoutes)
    app.use('/', managementRoutes)
    app.use('/', notificationRoutes)
}

module.exports = route;
