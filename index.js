var express = require('express'),
	home = require('./routes/home.js'),
	customer = require('./routes/customer.js');

var app = express();

app.get('/', home.index);
app.get('/customers', customer.index);
app.get('/customers/contact', customer.contact);

app.listen(3000);