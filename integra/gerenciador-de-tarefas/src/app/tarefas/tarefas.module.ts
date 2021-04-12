import { LocalStorageService } from './shared/storage.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListarTarefaComponent } from './listar';
import { TarefaService } from './shared';
import { CadastrarTarefaComponent } from './cadastrar';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent
  ],
  providers: [
    TarefaService,
    LocalStorageService
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class TarefasModule { }
