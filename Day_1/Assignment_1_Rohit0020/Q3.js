// creating an instance of http module
const http = require("http");
const port=8084;
// callback
http.createServer(function(req, res) {
    res.write("Fname : Rohit\n");
    res.write("Lname : Goud\n");
    res.write("College : YCP AIT\n");
    res.write("Address : Chembur\n");
    res.write("Stream : Computer Engineering\n");
    res.end("this is the end of the program\n");
}).listen(port);
console.log(`running on, ${port}`)
console.log("Server running at http://127.0.0.1:8084");