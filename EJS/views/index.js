import express from express;

const app =express();
const port = 3000;
app.listen(port,() => {
    console.log(`My server${port}`);
    
});


app.get('/',(req, res) => {
    const getDay = () => {
        res.send("Hello");
    }
    getDay();
});
