const Report = require("../models/reportModel");
var fetch = require("node-fetch");
class reportController {
    temparature(req, res) {
        res.render("report/report_temparature");
    }
    humidity(req, res) {
        res.render("report/report_humidity");
    }

    addReport(temperature, humidity) {
        let newReport = new Report({
            temperature: temperature,
            humidity: humidity,
        });
        console.log(newReport);

        newReport
            .save()
            .then()
            .catch((e) => {
                console.log(e);
            });
    }

    async getAverage(name, startDay, endDay) {
        var result;
        await fetch(
                `https://io.adafruit.com/api/v2/DAFS/feeds/${name}/data?start_time=${startDay}&end_time=${endDay}`, {
                    method: "GET", // or 'PUT'
                }
            )
            .then((response) => response.json())
            .then((data) => {
                let sum = 0;
                for (const i in data) {
                    sum += parseInt(data[i].value);
                }
                result = sum / Object.keys(data).length;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        return result;
    }

    async addAverage(startDay, endDay) {
        var temAvg = await this.getAverage("temp", startDay, endDay);
        var humiAvg = await this.getAverage("humi", startDay, endDay);
        this.addReport(temAvg, humiAvg);
    }
}

module.exports = new reportController();