/**
 * Created by Alex on 18.06.2017.
 */
/**
 * Created by Alex on 18.06.2017.
 */
'use strict';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var planeSchema = mongoose.Schema({
	'seat-num-total': Number,
	'seat-num-busy': Number,
	'seat-num-free': Number
});

var Plane = mongoose.model('Plane', planeSchema);

module.exports = Plane;