class SiteController{

    requireLogin(req, res, next) {
        console.log(req.isAuthenticated())
            if (!req.isAuthenticated()) {
        return res.redirect("/users/login");
    }
    next();
    }

    getHomePage(req, res, next) {
        var user = {}
        if(req.user){
            user = JSON.parse(JSON.stringify(req.user));
            }
        res.render('homepage/home', {user: user });
    }

   
    
    
}

module.exports = new SiteController();