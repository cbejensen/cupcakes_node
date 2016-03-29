var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

var logger = function(req, res, next) {
    console.log('\n--------------------\n')
    console.log('\n____HEADERS___\n', req.headers)
    console.log('\n____BODY___\n', req.body)
    console.log('\n____SESSION___\n', req.session)
    next();
}

var cart = [];

app.use(bodyParser.json());
app.use(session({
    secret: 'g12321',
    saveUninitiated: true,
    resave: true
}))

app.post('/cart', function(req, res, next) {
    cart.push(req.body);
    res.status(200).json(req.body)
})

app.listen(3000, function() {
    console.log('Watching ' + 3000)
})
