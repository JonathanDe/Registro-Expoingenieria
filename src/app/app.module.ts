import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { FormularioService, Usuario } from './formulario.service';

@NgModule({
  declarations: [AppComponent, FormularioComponent, ListaComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [FormularioService, Usuario],
  bootstrap: [AppComponent]
})
export class AppModule {}
