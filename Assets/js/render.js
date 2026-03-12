import express from "express";
const app = express();

app.post("/submit",(req, res) => {
    const name = req.body['name'];
    res.send(`<h1>Hello ${name}</h1>`);
});