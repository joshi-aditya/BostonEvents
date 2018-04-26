const express = require('express');
const router = express.Router();
const Events = require('../models/events');

/* Get events. */
router.get('/', function (req, res, next) {
  Events.find({date : {'$gte': new Date()}}).sort({date: 1})
    .exec(function (err, events) {
      if (err) {
        return res.status(500).json({
          title : 'An error occurred',
          error : err
        });
      }
      res.status(200).json({
        message : 'Success',
        obj : events
      });
    });
});

/** Get events by category */
router.get('/:category', function(req, res, next){
  
  const category = req.params.category;
  
  Events.find({category: category, date : {'$gte': new Date()}}).sort({date: 1})
    .exec(function (err, events) {
      if (err) {
        return res.status(500).json({
          title : 'An error occurred',
          error : err
        });
      }
      res.status(200).json({
        message : 'Success',
        obj : events
      });
    });
});

/* Creating events */
router.post('/', function (req, res, next) {

  let event = new Events({
    description : req.body.description,
    name : req.body.name,
    imageLink : req.body.imageLink,
    category : req.body.category,
    streetAddress : req.body.streetAddress,
    location : req.body.location,
    date : req.body.date,
    cost : req.body.cost
  });

  event.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title : 'Error while saving event',
        error : err
      });
    }
    res.status(201).json({
      title : 'Event created',
      obj : result
    });
  });
});

module.exports = router;