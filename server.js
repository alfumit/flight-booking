/**
 * Created by Alex on 18.06.2017.
 */
var express = require('express'),
    http = require('http'),
    app = express(),
    //router = require('./server/routes.js'),
    mongoose = require('mongoose'),
    socketio = require('socketio');

mongoose.connect('mongodb://localhost:27017/test');

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});
/*
var db = mongoose.connection;
db.on('error', function(err) {
    console.log('Database error:', err.message);
    app.all('*', function(req, res) {
        res.status(500).send('Unable to connect to database');
    });
});

db.once('open', function() {
    console.log('Database Connected');
});
*/

//app.use(express.static(__dirname));

// Go to routing
//app.use('/', router);

app.all('*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});
