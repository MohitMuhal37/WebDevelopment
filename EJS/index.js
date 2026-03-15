import express from "express";

const app =express();
const port = 3000;

app.listen(port,() => {
    console.log(`My server${port}`);  
});


app.get('/',(req, res) => {
    const today = new Date();
    const day = today.getDay();
    
    let type = 'a weekDay';
    let adv = 'work hard';


    if(day === 0 || day === 6){
        type = 'a weekend';
        adv = 'its time to fun';
    }
    res.render("index.ejs", {
    daytype: type,
    advise: adv
   });
    getDay();
});
