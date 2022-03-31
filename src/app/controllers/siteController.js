class SiteController {
	requireLogin(req, res, next) {
		console.log(req.isAuthenticated());
		if (!req.isAuthenticated()) {
			return res.redirect("/users/login");
		}
		next();
	}

	getHomePage(req, res, next) {
		var user = {};
		if (req.user) {
			user = JSON.parse(JSON.stringify(req.user));
		}

<<<<<<< HEAD
		res.render("homepage/home", {user: user});
	}
=======
    getHomePage(req, res, next) {
        var user = {}
        if(req.user){
            user = JSON.parse(JSON.stringify(req.user));
            }
        res.render('homepage/home', {user: user });
    }

    requireLoginAPI(req, res, next) {
        console.log(req.isAuthenticated())
            if (!req.isAuthenticated()) {
        return res.send({loggedIn: false});
    } next()
    }
    
    
>>>>>>> 39fcf5a0bce5c7ac31c437b4aa0ce4332b4fe7ad
}

module.exports = new SiteController();
