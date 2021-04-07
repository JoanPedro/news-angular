import { Concessionaria } from './app2';
import { ConcessionariaDao } from './ConcessionariaDao';

const dao: ConcessionariaDao = new ConcessionariaDao();
const concessionaria: Concessionaria = new Concessionaria('AV Paulo VI');

dao.inserir(concessionaria);
dao.atualizar(concessionaria);
dao.remover(1);
dao.selecionar(1);
dao.selecionarTodos();