import { Component, Input, OnInit } from '@angular/core';
import { ListaTransferenciaService } from 'src/service/lista-transferencia.service';

@Component({
  selector: 'app-lista-transferencias',
  templateUrl: './lista-transferencias.component.html',
  styleUrls: ['./lista-transferencias.component.css']
})
export class ListaTransferenciasComponent implements OnInit {

  listaTransferencias: any[] = [];
  title: string = "titulo"

  constructor(private listaTransferenciaService: ListaTransferenciaService) { }

  ngOnInit() {
    this.listaTransferencias = this.listaTransferenciaService.getListaTransferencia();
  }

}
