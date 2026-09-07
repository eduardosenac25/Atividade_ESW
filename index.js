"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = require("./Veiculo");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const teclado = (0, prompt_sync_1.default)();
console.log('Criação de veículo');
const carro = criaVeiculo();
while (true) {
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");
    const opcao = +teclado('Escolha uma opção: ');
    if (opcao === 0) {
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 3:
            subirMarcha(carro);
            console.log(`Marcha atual: ${carro.marchaAtual}`);
            break;
        default:
            break;
    }
}
console.table(carro);
function acelerar(veiculo) {
    if (veiculo.marchaAtual != 0) {
        veiculo.velocidade += veiculo.potencia * 0.1;
        console.log(veiculo.velocidade);
    }
}
function criaVeiculo() {
    const veiculo = new Veiculo_1.Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}
function subirMarcha(veiculo) {
    if (veiculo.marchaAtual < veiculo.numeroMarchas) {
        veiculo.marchaAtual++;
    }
}
