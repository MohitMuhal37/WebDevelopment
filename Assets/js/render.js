import express from "express";
const app = express();
const port = 3000;
app.listen(port,() => {
    console.log(`${port}`);
    
});

app.get('/',(req, res) => {
    res.send("h1");
})

app.post("/",(req, res) => {
    const name = req.body['name'];
    res.send(`<h1>Hello ${name}</h1>`);
});