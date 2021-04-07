"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
var app2_1 = require("./app2");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log("Lógica de Inserir");
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log("Lógica de Atualizar");
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log("Lógica de Remover");
        return new app2_1.Concessionaria('Av. Paulo VI');
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log("Lógica de Selecionar");
        return new app2_1.Concessionaria('Av. Paulo VI');
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log("Lógica de Selecionar Todos");
        return [];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
