/**
 * Created by Alex on 18.06.2017.
 */
'use strict';

let router = require('express').Router(),
	Passenger = require('./models/passenger.js'),
	Plane = require('./models/plane.js'),
	Seat = require('./models/seat.js');

router.post('/svc/add-passenger', function(req, res) {
	let item = new Passenger({
		'firstName': req.body.firstName,
		'lastName': req.body.lastName,
		'email': req.body.email,
		'chose-plane': req.body.plane,
		'seat': req.body.seat,
	});
	// Save Passenger
	return item.save()
	.then(function() {
		return res.status(200).send();
	})
	.catch(function(err) {
		console.log(err);
		return res.status(500).send(err);
	});
});

router.post('/svc/get-seats', function(req, res) {
	// Return all seats
	return item.save()
	.then(function() {
		return res.status(200).send();
	})
	.catch(function(err) {
		console.log(err);
		return res.status(500).send(err);
	});
});

router.post('/svc/book-seat', function(req, res) {
	// Book a seat
	return item.save()
	.then(function() {
		return res.status(200).send();
	})
	.catch(function(err) {
		console.log(err);
		return res.status(500).send(err);
	});
});


router.patch('/svc/admin-change-passenger', function(req, res) {
	// Save Passenger
	return item.save()
	.then(function() {
		return res.status(200).send();
	})
	.catch(function(err) {
		console.log(err);
		return res.status(500).send(err);
	});
});

router.patch('/svc/admin-change-seat', function(req, res) {
	// Save Seat
	return item.save()
	.then(function() {
		return res.status(200).send();
	})
	.catch(function(err) {
		console.log(err);
		return res.status(500).send(err);
	});
});

module.exports = router;