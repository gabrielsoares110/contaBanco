import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaTransferenciasComponent } from './lista-transferencias/lista-transferencias.component';
import { FormsModule } from '@angular/forms';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';

@NgModule({
  declarations: [AppComponent, CabecalhoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
