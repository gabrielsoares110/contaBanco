import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "nova-transferencia",
  },
  {
    path: "nova-transferencia",
    loadChildren: () =>
      import("./nova-transferencia/nova-transferencia.module").then(
        (m) => m.NovaTransferenciaModule
      ),
  },
  {
    path: "lista-transferencias",
    loadChildren: () =>
      import("./lista-transferencias/lista-transferencias.module").then(
        (m) => m.ListaTransferenciasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
