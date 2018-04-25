var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/** Creating users. */
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

/** get list of users */
router.get('/', function (req, res ,next) {

    User.find()
        .exec(function (err, users) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: users
            });
        });
});

/** User sign in */
router.post('/signin', function(req, res, next) {

    User.findOne({email: req.body.email}, function(err, user) {
        if(err) {
            return res.status(500).json({
                title: 'Error while signin',
                error: err
            });
        }
        if(!user) {
            return res.status(401).json({
                title: 'login failed',
                error: {message: 'User not found'}
            });
        }
        if( !bcrypt.compareSync(req.body.password, user.password)){
            return res.status(401).json({
                title: 'login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', { expiresIn: 3600});
        res.status(201).json({
            message: 'Login Successful',
            token: token,
            userId: user._id
        });
    });
});

module.exports = router;
