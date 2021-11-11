const express = require("express");
const app = express();
const porta = 3000;

app.get('/', function (req, res) {
    res.send ("Bem-Vindo");

});

app.listen(porta, function () {
    console.log("Aplicação rodando na porta " +porta);
});