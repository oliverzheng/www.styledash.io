var URL = require('url').URL;
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.all('*', function(req, res) {
	return res.redirect(301, 'http://styledash.io' + req.originalUrl);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
