var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const fetch = require("node-fetch");

var Trip = require('../models/trips') 

router.get('/', (req, res) => {
  // if (!req.body.departure || !req.body.arrival || !req.body.date) {
    console.log(req.body.departure)
    // const date = date.format('L');
    // console.log(req.body.date)

  //   res.json({ result: false, error: 'Please fill the fields!'})
  //   return;
  // }
  // Trip.find({
  //   $and: [
  //     { departure : req.body.departure },
  //     { arrival : req.body.arrival },
  //     { date: req.body.date },
  //   ]
  // })
})

//route get trip sur le search

router.delete('/:id', function(req, res, next) {
  console.log(req.params.id);

  // mise en place de la suppresion


  res.json({});
});
module.exports = router;
