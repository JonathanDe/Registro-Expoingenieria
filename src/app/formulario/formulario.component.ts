import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormularioService, Usuario } from '../formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public listaPases = [
    '',
    'Pase Full',
    'Pase Energía',
    'Pase Materiales',
    'Pase Infraestructura',
    'Pase Logístico',
    'Pase TIC'
  ];
  private crearCuenta;
  private modificandoUsuario = false;
  constructor(
    private usuarioService: FormularioService,
    private usuario: Usuario
  ) {
    this.crearCuenta = new FormGroup({
      nombre: this.usuario.nombre,
      edad: this.usuario.edad,
      apellido: this.usuario.apellido,
      cedula: this.usuario.cedula,
      correoElectronico: this.usuario.correoElectronico,
      telefono: this.usuario.telefono,
      tipoPase: this.usuario.tipoPase
    });
  }

  ngOnInit() {
    this.usuarioService.usuarioSeleccionado$.subscribe(
      (usuarioSeleccionado: Usuario) => {
        console.log(usuarioSeleccionado);
        if (usuarioSeleccionado) {
          this.editarUsuario(usuarioSeleccionado);
        }
      }
    );
  }
  guardarRegistro(usuario: any) {
    if (this.crearCuenta.valid) {
      if (this.modificandoUsuario) {
        this.usuarioService.modificarRegistro(this.crearCuenta.value);
      } else {
        this.usuarioService.guardarUsuario(this.crearCuenta.value);
      }
      this.crearCuenta.reset();
    }
  }
  limpiarFormulario() {
    this.crearCuenta.reset();
  }
  editarUsuario(usuarioSeleccionado: Usuario) {
    this.modificandoUsuario = true;
    Object.keys(usuarioSeleccionado).forEach(clave => {
      this.usuario[clave].setValue(usuarioSeleccionado[clave]);
    });
  }
}
