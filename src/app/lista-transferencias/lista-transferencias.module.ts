import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ListaTransferenciasComponent } from "./lista-transferencias.component";
import { ListaTransferenciasRoutingModule } from "./lista-transferencias-routing.module";

@NgModule({
  declarations: [ListaTransferenciasComponent],
  imports: [CommonModule, FormsModule,ListaTransferenciasRoutingModule],
  exports: [ListaTransferenciasComponent],
})
export class ListaTransferenciasModule {}
