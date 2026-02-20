// console.log("hello from Node");

//A call back Method

const fs = require("fs");
// const fs1 = require("");

// fs.writeFile("Max.txt", "Hello Form Node.JS", (err) => {
//     if(err) throw err;
//     console.log("File is Saved");
// });

fs.readFile("Max.txt", 'utf8', (err, data) => {
   if(err) throw err;
   console.log(data);
})