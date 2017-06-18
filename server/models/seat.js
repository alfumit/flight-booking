/**
 * Created by Alex on 18.06.2017.
 */
'use strict';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var seatSchema = mongoose.Schema({
	'price': Number,
	'type': String,
	'reserved': Boolean,
	'checked-in': Boolean
});

var Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
