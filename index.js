
let mensagem = "Minha primeira aplicação Node.js";
let dia = 10;

console.log("Hoje é dia ", dia);

dia = 11;

console.log(mensagem);
console.log(`Hoje é dia: ${dia}`);

console.log("--------------------")

if (dia == 10) {
    console.log("Dia de Pagamento");
} else {
    console.log("Não é dia de pagamento");
}

console.log("--------------------")

let carros = [];

let carro = {
    "nome": "Fusca",
    "ano": "1969",
    "cor": "bege",
}

carros.push(carro);

console.log(carros);

carro = carros[0];
carro.cor = "vermelho";

//console.log(carro, carros)

carros[0].cor = "vermelho";

console.log(carros)

let opala = {
    nome: "opala",
    ano: 1984,
    modelo: 1985,
    cor:"preto",
}

carros.push(opala);

console.log(carros)

carros [0] = opala;
carros [1] = carro;

console.log(carros)

for (const carro of carros) {
   carro.cor = "branco"
    console.log(carro);
}