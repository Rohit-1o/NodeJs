// creating an instance of http module
let http = require("http");

// callback
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type' : "text/plain"});
    res.write("Hello World\n");
    res.write("Hello World\n");
    res.write("Hello World\n");
    res.write("Hello World\n");
    res.end(); // IMPORTANT
}).listen(3031);

console.log('Server running at http://127.0.0.1:3031');