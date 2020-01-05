const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
});

app.get('/name/:myname', (req, res) => {
    const myName = req.params.myname
    res.send(`<h1>You entered:  ${myName}</h1>`)
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})