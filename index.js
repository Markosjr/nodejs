const express = require("express");
const app = express();
const porta = 3000;

app.listen(porta, function () {
    console.log("Aplicação rodando na porta " +porta);
});