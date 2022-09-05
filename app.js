const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: true }))



app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    const add = n1 + n2;
    res.send(`add = ${add}`)
});



app.post("/", (req, res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    const sub = n1 - n2;
    res.send(`subtract = ${sub}`)
});


app.post("/", (req, res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    const multiplication = n1 * n2;
    res.send(`multiplication = ${multiplication}`)
});


app.post("/", (req, res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    const division = n1 / n2;
    res.send(`division = ${division}`)
});


app.listen(3002, (req, res) => {
    console.log("Server is running at port 3002")
});


