var path = require('path');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'))
	});
	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
	});
	app.get('/portfolio', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/portfolio.html'));
	});
	app.get('/resume', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/resume.html'));
	});
	app.get('/contact', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/contact.html'));
	});
	app.get('/download', function(req, res, next){
		var file = __dirname + '/../public/images/Menu.pdf';
		res.download(file);
	});
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
	});
}