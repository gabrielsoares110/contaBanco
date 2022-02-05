import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTransferenciasComponent } from './lista-transferencias.component';

const routes: Routes = [
  {
    path: '',
    component: ListaTransferenciasComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTransferenciasRoutingModule {}
