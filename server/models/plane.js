/**
 * Created by Alex on 18.06.2017.
 */
/**
 * Created by Alex on 18.06.2017.
 */
'use strict';

let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let planeSchema = mongoose.Schema({
	'seat-num-total': Number,
	'seat-num-busy': Number,
	'seat-num-free': Number
});

let Plane = mongoose.model('Plane', planeSchema);

module.exports = Plane;