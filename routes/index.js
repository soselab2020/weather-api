const express = require('express');
const router = express.Router();

const app = express();

// GET service
router.get('/weather/:city', function (req, res) {
  let report;
  let city = req.params.city;

  if (city == 'Taipei') {
    report = { temperature: "+15 °C", wind: "6 km/h", description: "Partly cloudy" };
  } else if (city == 'Keelung') {
    report = { temperature: "+14 °C", wind: "6 km/h", description: "Rainy" };
  } else if (city == 'Kaohsiung') {
    report = { temperature: "+22 °C", wind: "6 km/h", description: "Sunny" };
  } else {
    report = { temperature: "+7 °C", wind: "6 km/h", description: "Sunny" };
  }
  res.send(report);
});

module.exports = router;
