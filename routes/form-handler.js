const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('ok');
})

module.exports = app;
