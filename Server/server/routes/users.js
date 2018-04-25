var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');

/* Creating users. */
router.post('/', function(req, res, next) {

    var user = new User({
       firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });

    user.save(function (err, result) {
        if(err) {
            return res.status(500).json({
                title: 'Error while saving user',
                error: err
            });
        }
        res.status(201).json({
            title: 'User created',
            obj: result
        });
    });
});

module.exports = router;
