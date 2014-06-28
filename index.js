var express = require('express'),
	logger = require('morgan'),
	home = require('./routes/home.js'),
	customer = require('./routes/customer.js');

var app = express();

app.set('title', 'Express Demo');

app.use(logger());
//app.use(express.morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', home.index);
app.get('/customers', customer.index);
app.get('/customers/contact', customer.contact);
app.get('/potato', function(req, res) {
	res.send('potato is ' + app.get('title'));
});

app.listen(3000);