"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor() {
        this.marca = 'Padrão';
        this.modelo = 'Padrão';
        this.potencia = 0;
        this.numeroMarchas = 5;
        this.marchaAtual = 0;
        this.velocidade = 0;
    }
    frear(reducao = 10) {
        this.velocidade -= reducao;
        if (this.velocidade < 0) {
            this.velocidade = 0;
        }
        if (this.velocidade === 0) {
            this.marchaAtual = 0;
        }
    }
}
exports.Veiculo = Veiculo;
