/**
 * Created by Alex on 18.06.2017.
 */
'use strict';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var passengerSchema = mongoose.Schema({
	'id': Number,
	'chose-plane': String,
	'seat': Number
});

var Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;