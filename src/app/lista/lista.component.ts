import { Component, OnInit } from '@angular/core';
import { FormularioService, Usuario } from '../formulario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaUsuarios: Usuario[];
  constructor(private usuarioService: FormularioService) {}

  ngOnInit() {
    this.usuarioService.baseUsuario$.subscribe(usuarios => {
      this.listaUsuarios = usuarios;
    });
  }

  public borrarTodo() {
    this.usuarioService.borrarTodo();
  }
  public editarRegistro(usuario: Usuario, indice) {
    this.usuarioService.editarRegistro(usuario, indice);
  }
}
