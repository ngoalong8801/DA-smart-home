const siteRoutes = require('./site')
const userRoutes = require('./users')
const deviceRoutes = require('./devices')

function route(app) {
    app.use('/', siteRoutes);
    app.use('/', userRoutes)
    app.use('/', deviceRoutes)
}

module.exports = route;
