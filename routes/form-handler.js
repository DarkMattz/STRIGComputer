const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res, next) => {
    res.redirect("https://www.google.com/search?q=" + req.body.name);
})

module.exports = app;
