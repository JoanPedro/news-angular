"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
        this.velocidade = 0;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
        this.listaDeCarros = new Array();
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.adicionarVariosCarros = function (carros) {
        var _a;
        (_a = this.listaDeCarros).push.apply(_a, carros);
    };
    Concessionaria.prototype.adicionarUmCarro = function (carro) {
        this.listaDeCarros.push(carro);
    };
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return 'De Segunda a sexta das 08 as 18h e sábado das 08 as 12h';
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Object.defineProperty(Pessoa.prototype, "dizerCarroQueTem", {
        get: function () {
            return this.carro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "comprarCarro", {
        set: function (carro) {
            this.carro = carro;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    return Pessoa;
}());
var umaPessoa = new Pessoa('Joan Pedro', 'Uno');
var umCarro = new Carro('Gol', 4);
var umaConcessionaria = new Concessionaria('Brotas');
var listaDeCarros = new Array(new Carro('Gol', 4), new Carro('Uno', 4), new Carro('Ford Ka', 4));
umaConcessionaria.adicionarVariosCarros(listaDeCarros);
umaPessoa.comprarCarro = umCarro;
console.log(umaPessoa.dizerCarroQueTem);
console.log(umaConcessionaria.mostrarListaDeCarros());
