import { LocalStorageService } from './storage.service';
import { Tarefa } from './tarefa.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TarefaService {

  constructor(
    private readonly localStorageService: LocalStorageService
  ) {}

  listarTodos(): Tarefa[] {
  	const tarefas = localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
  	const tarefas = this.listarTodos();
  	tarefa.id = new Date().getTime();
  	tarefas.push(tarefa);
    // localStorage.setItem('tarefas', JSON.stringify(tarefas));
  	localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa | undefined {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    // localStorage.setItem('tarefas', JSON.stringify(tarefas));
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    // localStorage.setItem('tarefas', JSON.stringify(tarefas));
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    // localStorage.setItem('tarefas', JSON.stringify(tarefas));
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
