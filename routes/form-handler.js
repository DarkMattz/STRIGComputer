const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res, next) => {
    require('../model/UserGetter').signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(signInRes => {
            res.send(JSON.stringify([signInRes.id, signInRes.name, signInRes.passwordHashed]))
        }).catch(err => {
            res.send(err.message)
        })
})

app.post('/register', (req, res, next) => {
    require('../model/UserCreator').createUser(req.body.name, req.body.tel, req.body.email, req.body.password)
    
    setTimeout(() => {
        require('../model/UserGetter').signInWithEmailAndPassword(req.body.email, req.body.password).then(signInRes => {
            require('../model/AddressHandler').addAddress(signInRes, req.body.address)
            res.send('Sign up successful')
        }).catch(err => {
            res.send(err.message)
        })
    }, 1000)
    
})

module.exports = app;
