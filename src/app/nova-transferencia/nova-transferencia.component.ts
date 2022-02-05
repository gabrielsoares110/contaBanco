import { Component, OnInit } from "@angular/core";
import { ListaTransferenciaService } from "src/service/lista-transferencia.service";

@Component({
  selector: "app-nova-transferencia",
  templateUrl: "./nova-transferencia.component.html",
  styleUrls: ["./nova-transferencia.component.css"],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: number;

  constructor(private listaTransferenciaService: ListaTransferenciaService) {}

  transferir() {
    const transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.listaTransferenciaService.adicionarTransferencia(transferencia);
  }

}
