import { Concessionaria } from './app2';
import { Dao } from './Dao';

export class ConcessionariaDao implements Dao<Concessionaria> {

    nomeTabela: string = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean {
        console.log("Lógica de Inserir");
        return true;
    }

    atualizar(object: Concessionaria): boolean {
        console.log("Lógica de Atualizar")
        return true;
    }

    remover(id: number): Concessionaria {
        console.log("Lógica de Remover")
        return new Concessionaria('Av. Paulo VI');
    }

    selecionar(id: number): Concessionaria {
        console.log("Lógica de Selecionar")
        return new Concessionaria('Av. Paulo VI');
    }

    selecionarTodos(): Array<Concessionaria> {
        console.log("Lógica de Selecionar Todos")
        return [];
    }
}