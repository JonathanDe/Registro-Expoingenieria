import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  public baseUsuarios: Object[] = [];
  public baseUsuario$: BehaviorSubject<any> = new BehaviorSubject([]);
  public usuarioSeleccionado$: BehaviorSubject<Usuario> = new BehaviorSubject(
    null
  );
  private indice;
  constructor() {}

  public guardarUsuario(usuario: Object) {
    if (this.baseUsuarios.length < 20) {
      this.baseUsuarios.unshift(usuario);
      this.baseUsuario$.next(this.baseUsuarios);
    }
  }

  public borrarTodo() {
    this.baseUsuarios = [];
    this.baseUsuario$.next(this.baseUsuarios);
  }
  public editarRegistro(usuario: Usuario, indice) {
    this.usuarioSeleccionado$.next(usuario);
    this.indice = indice;
  }
  public modificarRegistro(usuario) {
    this.baseUsuarios[this.indice] = usuario;
    this.baseUsuario$.next(this.baseUsuarios);
  }
}

export class Usuario {
  regex = {
    emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    notNumbersRegex: /\D/g,
    onlyNumbersRegex: /^[0-9]*$/,
    phoneNumberRegex: /^\d{10}$/
  };

  nombre: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.regex.notNumbersRegex)
  ]);
  apellido: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.regex.notNumbersRegex)
  ]);
  cedula: FormControl = new FormControl('', [Validators.required]);
  correoElectronico: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.regex.emailRegex)
  ]);
  telefono: FormControl = new FormControl('', [
    Validators.pattern(this.regex.phoneNumberRegex)
  ]);
  edad: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.regex.onlyNumbersRegex)
  ]);
  tipoPase: FormControl = new FormControl('', [Validators.required]);
}
