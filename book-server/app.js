require('dotenv').config();

var express = require('express');
var app = express();
var user = require('./controllers/usercontroller');
var book = require('./controllers/bookcontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());
console.log('this is a breakpoint for line 13');
app.use(require('./middleware/headers'));
app.use('/api', user);

app.use(require('./middleware/validate-session'));

app.use('/api/book', book);

app.listen(process.env.PORT, function(){
    console.log(`sever listening on port ${process.env.PORT}`)
})