const express = require('express');
const router = express.Router();
const Bookings = require('../models/booking');

/* Get bookings. */
router.get('/:userId', function (req, res, next) {

  const userId = req.params.userId;

  Bookings.find({ 'user._id' : userId})
    .exec(function (err, bookings) {
      if (err) {
        return res.status(500).json({
          title : 'An error occurred',
          error : err
        });
      }
      res.status(200).json({
        message : 'Success',
        obj : bookings
      });
    });
});

/* Creating bookings */
router.post('/', function (req, res, next) {

  let booking = new Bookings({
    event : req.body.event,
    user : req.body.user,
    numberOfTickets : req.body.numberOfTickets
  });

  booking.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title : 'Error while booking',
        error : err
      });
    }
    res.status(201).json({
      title : 'Booking done',
      obj : result
    });
  });
});

module.exports = router;