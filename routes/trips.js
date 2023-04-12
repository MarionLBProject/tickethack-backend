const moment = require("moment");
var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");


router.post("/", (req, res)  => {
  const departure = req.body.departure;
  const arrival = req.body.arrival;
  const date = new Date(req.body.date);
  const startDate = moment(date).startOf("day");
  const endDate = moment(date).endOf("day");
  Trip.find({
    departure,
    arrival,
    date: { $gte: startDate, $lte: endDate },
  }).then((data) => {
    console.log(data);
    if (data == false) {
      res.json({ result: false });
    } else {
      res.json({ result: true, list: data });
    }
  });
});

module.exports = router;