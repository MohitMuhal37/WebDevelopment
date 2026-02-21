import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Express js</h1>");
    // console.log(req.rawHeaders);
});

app.post("/registered", (req, res) => {
    res.send("getting registerd");
    res.sendStatus(201);
});

app.put("/user/mohit", (req, res) => {
    res.sendStatus(202);
});

app.patch("/user/mohit", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/mohit", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}.`);
})