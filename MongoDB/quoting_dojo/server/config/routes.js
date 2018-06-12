// routes
app.get('/', function(request, response) {
	response.render('index');
});

app.post('/quotes', function(request, response) {
	// code for post data (request.body)
	console.log('hit post quotes route');
	Quote.create(req.body, function(err) {
		if(err) {
			console.log(err);
		}
	});
	response.redirect('/quotes');
});

app.get('/quotes', function(request, response) {
	Quote.find({}, function(err, quotes) {
		console.log('hit get quotes route');
		if (err) {
			console.log(err);
		}
		response.render('quotes', {quotes: quotes});
	});
});