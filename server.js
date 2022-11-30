const express = require('express');
const app = express();
app.set("view engine", "ejs")


app.get("/", function(req, res) {
    res.render('index');
})
app.get("/pagcuid", function(req, res) {
    res.render('pagcuid');
})
app.get("/pagmed", function(req, res) {
    res.render('pagmed');
})
app.get("/cadastroIdoso", function(req, res) {
    res.render('cadastroIdoso');
})
app.get("/criarDieta", function(req, res) {
    res.render('criarDieta');
})

app.listen(8080)
