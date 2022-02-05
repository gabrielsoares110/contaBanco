import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NovaTransferenciaComponent } from "./nova-transferencia.component";
import { FormsModule } from "@angular/forms";
import { NovaTransferenciaRoutingModule } from "./nova-transferencia-routing.module";

@NgModule({
  declarations: [NovaTransferenciaComponent],
  imports: [CommonModule, FormsModule,NovaTransferenciaRoutingModule],
  exports: [NovaTransferenciaComponent],
})
export class NovaTransferenciaModule {}
