// creating an instance of http module
const http = require("http");
const port=8084;
// callback
http.createServer(function(req, res) {
    res.write("cdac ycp\n");
    res.write("cdac ycp\n");
    res.end("this is the end of the program\n");
}).listen(port);
console.log(`running on, ${port}`)
console.log("Server running at http://127.0.0.1:8084");