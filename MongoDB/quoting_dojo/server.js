// server setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({secret: '1312312312313'}));
app.use(flash());

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;


// schema
var QuoteSchema = new mongoose.Schema({
	name: {type: String},
	quote: {type: String}
}, {timestamps: true});
// model
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');


// start server
app.listen(8000, function() {
	console.log('listening on port 8000')
});