import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;

        case 2:
            carro.frear();
            console.log(`Velocidade atual: ${carro.velocidade}`);
            break;

        case 3:
            subirMarcha(carro);
            console.log(`Marcha atual: ${carro.marchaAtual}`);
            break;

        case 4:
            descerMarcha(carro);
            console.log(`Marcha atual: ${carro.marchaAtual}`);
            break;

        case 5:
            console.table(carro);
            break;
    
        default:
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}
function subirMarcha(veiculo: Veiculo): void{
    if(veiculo.marchaAtual < veiculo.numeroMarchas){
        veiculo.marchaAtual++;
    }       
}

function descerMarcha(veiculo: Veiculo): void{
    if(veiculo.marchaAtual > 0){
        veiculo.marchaAtual--;
    }
}
