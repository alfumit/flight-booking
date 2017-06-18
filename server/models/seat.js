/**
 * Created by Alex on 18.06.2017.
 */
'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let seatSchema = mongoose.Schema({
	'price': Number,
	'type': String,
	'reserved': Boolean,
	'checked-in': Boolean
});

let Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
