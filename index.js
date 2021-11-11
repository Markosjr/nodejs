const express = require("express");
const app = express();
const usuario = require("./rotas/usuario");
const porta = 3000;

app.use("/usuario", usuario);

app.get('/:nome', function (req, res) {
    console.log(req.params)
 
    const nome = req.params.nome

    res.send ("Olá  " + nome);

});

app.listen(porta, function () {
    console.log("Aplicação rodando na porta " +porta);
}); 