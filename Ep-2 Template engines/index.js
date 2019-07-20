var express = require('express');
var cookieParser = require('cookie-parser');


var userRouter = require('./router/users.router')
var authRouter = require('./router/auth.router')

var app = express();
var port = 3000;

app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.use(express.static('public'));

app.set('view engine' , 'pug');
app.set('views', './views');

app.get('/', function (request, response) {
	response.render('index', {
		name: 'z01nn'
	});
});

app.listen(port, function () {
	console.log('Server listening on port '+ port);
});
