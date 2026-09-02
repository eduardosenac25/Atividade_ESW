export class Veiculo{
    marca: string = 'Padrão';
    modelo: string = 'Padrão';
    potencia: number = 0;
    numeroMarchas: number = 5;
    marchaAtual: number = 0;
    velocidade: number = 0;

    frear(reducao: number = 10): void {
        this.velocidade -= reducao;
        if (this.velocidade < 0) {
            this.velocidade = 0;
        }
        if (this.velocidade === 0) {
            this.marchaAtual = 0;
        }
    }
}