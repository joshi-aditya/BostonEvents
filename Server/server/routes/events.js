var express = require('express');
var router = express.Router();
var Events = require('../models/events');
var bcrypt = require('bcryptjs');

/* Get events. */
router.get('/', function (req, res ,next) {

    Events.find()
        .exec(function (err, events) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: events
            });
        });
});

/* Creating events */
router.post('/', function(req, res, next) {

    var events = new Events({
       description: req.body.description,
       name: req.body.name,
       imageLink: req.body.imageLink,
       category: req.body.category,
       streetAddress: req.body.streetAddress,
       location: req.body.location,
       date: new Date(),
       cost: req.body.cost,

    });

    events.save(function (err, result) {
        if(err) {
            return res.status(500).json({
                title: 'Error while saving event',
                error: err
            });
        }
        res.status(201).json({
            title: 'Event created',
            obj: result
        });
    });
});
module.exports = router;
