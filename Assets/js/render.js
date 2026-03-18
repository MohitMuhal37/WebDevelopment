// import express from "express";
// const app = express();
// const port = 3000;
// app.listen(port,() => {
//     console.log(`${port}`);
    
// });

// app.get('/',(req, res) => {
//     res.send("h1");
// })

// app.post("/",(req, res) => {
//     const name = req.body['name'];
//     res.send(`<h1>Hello ${name}</h1>`);
// });


const person = {
    name : 'MOHIT',
    age : 22,
    email : 'MohitMuhal15122203@gmail.com',
    hobbies : ['Music', 'Movies', 'Coding', 'Explore New Things', 'Learn New Things'],
    skiils : ['Java', 'Dsa', 'JavaScript', 'WebDevelopement'],
    id : 123232
}

const Json = JSON.stringify(person);
console.log(Json);