class DeviceController {
	fan(req, res, next) {
		res.render("devices/fan");
	}
}

module.exports = new DeviceController();
