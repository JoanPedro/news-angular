import { Dao } from './Dao';
export class NewDao<T> implements Dao<T> {
    nomeTabela: string;
    inserir(object: T): boolean {
        return true;
    }

    atualizar(object: T): boolean {
        return Object();
    }

    remover(id: number): T {
        return Object();
    }

    selecionar(id: number): T {
        return Object();
    }

    selecionarTodos(): Array<T> {
        return Object();
    }
}