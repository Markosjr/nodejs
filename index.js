const express = require("express");
const app = express();
const porta = 3000;

app.get('/:nome', function (req, res) {
    console.log(req.params)
 
    const nome = req.params.nome

    res.send ("Bem- Vindo " + nome);

});

app.listen(porta, function () {
    console.log("Aplicação rodando na porta " +porta);
});