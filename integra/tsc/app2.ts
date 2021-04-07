import { ConcessionariaInterface } from './interface';
class Carro {
    private velocidade: number = 0;

    constructor(
        private readonly modelo: string, 
        private readonly numeroDePortas: number
    ) {}

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

export class Concessionaria implements ConcessionariaInterface {
    private listaDeCarros: Array<Carro> = new Array<Carro>();

    constructor(private readonly endereco: string) {}

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros;
    }

    public adicionarVariosCarros(carros: Array<Carro>) {
        this.listaDeCarros.push(...carros);
    }

    public adicionarUmCarro(carro: Carro) {
        this.listaDeCarros.push(carro);
    }

    public fornecerHorariosDeFuncionamento(): string {
        return 'De Segunda a sexta das 08 as 18h e sábado das 08 as 12h'
    }
}

class Pessoa {
    private carro: Carro;
    
    constructor(
        private readonly nome: string,
        private readonly carroPreferido: string,
    ) {}

    get dizerCarroQueTem() {
        return this.carro;
    }
    
    set comprarCarro(carro: Carro) {
        this.carro = carro;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }
}

const umaPessoa: Pessoa = new Pessoa('Joan Pedro', 'Uno');
const umCarro: Carro = new Carro('Gol', 4);
const umaConcessionaria: Concessionaria = new Concessionaria('Brotas');

const listaDeCarros: Array<Carro> = new Array<Carro>(
    new Carro('Gol', 4),
    new Carro('Uno', 4),
    new Carro('Ford Ka', 4),
);

umaConcessionaria.adicionarVariosCarros(listaDeCarros);

umaPessoa.comprarCarro = umCarro;

console.log(umaPessoa.dizerCarroQueTem)
console.log(umaConcessionaria.mostrarListaDeCarros())