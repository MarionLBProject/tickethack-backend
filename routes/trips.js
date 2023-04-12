var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const fetch = require("node-fetch");
const moment = require('moment');

var Trip = require('../models/trips') 

router.post('/', (req,res) => {
  const departure = req.body.departure
  const arrival = req.body.arrival
  const date = new Date(req.body.date)
  const startDate = moment(date).startOf("day");
  const endDate = moment(date).endOf("day");

  Trip.find({
  departure,
  arrival,
  date: { $gte: startDate, $lte: endDate },
  })
  .then(data => {
    console.log(data);
    if(!departure || !arrival || !date) {
      res.json({ result: false, error: 'Empty fields'})
  } else {
      res.json({ result: true, search: data})
  }
})
})
module.exports = router;
