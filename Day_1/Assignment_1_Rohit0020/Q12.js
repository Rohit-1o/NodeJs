const fs = require("fs");
function readFileData(){
    fs.readFile("myfile.txt", "utf8", function(err, data){
        if(err){
            console.log("Error reading file:", err);
            return;
        }
        console.log("File Content:\n" + data);
    });
}
readFileData();