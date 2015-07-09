var http = require('http');

var server = http.createServer(function (req, resp) {

	console.log('url: ' + req.url);

	for (var h in req.headers) {
		console.log(h + ': ' + req.headers[h]);
	}

	resp.writeHead(200, {"Content-Type": "text/html"});
	resp.write("<!DOCTYPE \"html\">");
	resp.write("<html>");
	resp.write("<head>");
	resp.write("<title>Foo Page</title>");
	resp.write("</head>");
	resp.write("<body>");
	resp.write("Trogdor!");
	resp.write("</body>");
	resp.write("</html>");
	resp.end();
});


server.listen(8888);

console.log('service started!');
