import express from "express";

const app =express();
const port = 3000;

app.listen(port,() => {
    console.log(`My server${port}`);  
});


app.get('/',(req, res) => {
   res.render("index.ejs", {
    daytype: 'a weekday',
    advie: 'work hard'
   });
    // getDay();
});
