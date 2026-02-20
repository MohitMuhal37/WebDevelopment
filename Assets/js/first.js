console.log("hello from Node");

//A call back Method

const fs = require("fs");

fs.writeFile("Max.txt", "Hello Form Node.JS", (err) => {
    if(err) throw err;
    console.log("File is Saved");
});