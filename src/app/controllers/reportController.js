class reportController {
	temparature(req, res) {
		res.render("report/report_temparature");
	}
	humidity(req, res) {
		res.render("report/report_humidity");
	}
}
module.exports = new reportController();
