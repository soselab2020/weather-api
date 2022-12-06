const express = require('express');
const router = express.Router();

const cors = require('cors');
const app = express();
app.use(cors());

// GET service
router.get('/weather/:city', function (req, res) {
  let report;
  let city = req.params.city;

  if (city == 'Taipei') {
    report = { temperature: "+17 °C", wind: "6 km/h", description: "Sunny" };
  } else if (city == 'Keelung') {
    report = { temperature: "+26 °C", wind: "6 km/h", description: "Partly cloudy" };
  } else if (city == 'Kaohsiung') {
    report = { temperature: "+24 °C", wind: "6 km/h", description: "Sunny" };
  } else {
    report = { temperature: "+7 °C", wind: "6 km/h", description: "Sunny" };
  }
  res.send(report);
});

module.exports = router;
