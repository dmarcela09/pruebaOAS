import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Libreria de modulos
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuadrangularComponent } from './cuadrangularesOAS/cuadrangular/cuadrangular.component';
import { MarcadorComponent } from './components/marcador/marcador.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadrangularComponent,
    MarcadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Agregar Modulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
