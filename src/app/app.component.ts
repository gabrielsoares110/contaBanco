import { Component, ViewChild } from '@angular/core';
import { ListaTransferenciaService } from 'src/service/lista-transferencia.service';
import { ListaTransferenciasComponent } from './lista-transferencias/lista-transferencias.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private listaTransferenciaService: ListaTransferenciaService){}

}
