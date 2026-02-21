import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Express js</h1>");
    // console.log(req.rawHeaders);
});
app.get("/about", (req, res) => {
    res.send("<h2>About page</h2>");
    // console.log(req.rawHeaders);
});
app.get("/contact", (req, res) => {
    res.send("<h2>Contact page</h2>");
    // console.log(req.rawHeaders);
});

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}.`);
})