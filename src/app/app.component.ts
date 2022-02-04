import { Component, ViewChild } from '@angular/core';
import { ListaTransferenciaService } from 'src/service/lista-transferencia.service';
import { ListaTransferenciasComponent } from './lista-transferencias/lista-transferencias.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('ListaTransferencia', {static: false}) componentListaTransferencia: ListaTransferenciasComponent;
  
  constructor(private listaTransferenciaService: ListaTransferenciaService){}

  valor: number;
  destino: number;

  transferir(){
    const transferencia = {
      valor : this.valor,
      destino : this.destino
    }
    this.listaTransferenciaService.adicionarTransferencia(transferencia);
    this.componentListaTransferencia.receberTransferencia();
  }


}
