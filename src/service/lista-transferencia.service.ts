import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ListaTransferenciaService {

  private listaTransferencia: any[] = [];

  constructor() {}

  getListaTransferencia = () => this.listaTransferencia;

  adicionarTransferencia(transferencia: any) {
    this.listaTransferencia.push(this.adicionarData(transferencia));
  }

  private adicionarData(transferencia: any) {
    transferencia = { ...transferencia, data: new Date() };
    return transferencia;
  }
}
