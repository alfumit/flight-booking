/**
 * Created by Alex on 18.06.2017.
 */
'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let passengerSchema = mongoose.Schema({
	'id': Number,
	'chose-plane': String,
	'seat': Number,
	'firstName': String,
	'lastName': String,
	'email': String
});

let Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;