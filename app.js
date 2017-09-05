var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')) ;

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));


var todoItems = [
	{id: 1, desc: 'foo'},
	{id: 2, desc: 'bar'},
	{id: 3, desc: 'baz'}
];

app.get('/', function(req,res){
	//load data from DB here
	res.render('index', {
		title: 'My App',
		items: todoItems
	});
});

app.post('/add', function(req,res){
	var newItem = req.body.newItem;

	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});

	res.redirect('/');
});

app.listen(1337, function(){
	console.log('ready on port 1337');
});

/*var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello, World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');*/