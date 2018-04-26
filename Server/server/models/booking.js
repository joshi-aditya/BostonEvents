'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');
var User = require('./user');
var Events = require('./events');

const bookingSchema = new Schema({
  event: { 
      type: Schema.Types.ObjectId, 
      ref: 'Events' 
    },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  numberOfTickets: {
    type: Number,
    required: true
  }
}, {
  usePushEach: true
});

bookingSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Booking', bookingSchema);