export class Veiculo {
    
    protected velocidade: number = 0;
    protected modelo: string;

    public acelerar(): void {
        this.velocidade += 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}