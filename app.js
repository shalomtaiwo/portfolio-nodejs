var http = require("http");
var fs = require("fs");

http
	.createServer((req, res) => {
		console.log(req.url);
		if (req.url === "/") {
			fs.readFile("index.html", (err, html) => {
				if (err) {
					throw err;
				}
				res.setHeader("Content-type", "text/html");
				res.write(html);
				res.statusCode = 200;
				res.end();
			});
		} else if (req.url === "/about") {
			fs.readFile("about.html", (err, html) => {
				if (err) {
					throw err;
				}
				res.setHeader("Content-type", "text/html");
				res.write(html);
				res.statusCode = 200;
				res.end();
			});
		} else if (req.url === "/contact") {
			fs.readFile("contact.html", (err, html) => {
				if (err) {
					throw err;
				}
				res.setHeader("Content-type", "text/html");
				res.write(html);
				res.statusCode = 200;
				res.end();
			});
		} else if (req.url === "/home") {
			res.statusCode = 301;
			res.setHeader("Location", "/");
			res.end();
		} else if (req.url == "/style.css") {
			res.setHeader("Content-type", "text/css");
			res.write(fs.readFileSync("style.css"));
			res.end();
		} else if (req.url == "/about.css") {
			res.setHeader("Content-type", "text/css");
			res.write(fs.readFileSync("about.css"));
			res.end();
		} else if (req.url == "/contact.css") {
			res.setHeader("Content-type", "text/css");
			res.write(fs.readFileSync("contact.css"));
			res.end();
		} else {
			fs.readFile("404.html", (err, html) => {
				if (err) {
					throw err;
				}
				res.setHeader("Content-type", "text/html");
				res.write(html);
				res.statusCode = 200;
				res.end();
			});
		}
	})
	.listen(3000);

console.log("server running @ 3000");
