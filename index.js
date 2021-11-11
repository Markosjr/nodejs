
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
    "modelo": "Fusca",
    "ano": "1969",
    "cor": "bege",
}

carros.push(carro);

console.log(carros);

