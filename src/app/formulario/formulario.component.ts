import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  usuario:Object={
    nombre: "Jonathan",
    apellido: "Dominguez",
    cedula: 1038120061,
    edad: 25,
    email: "jonathan@email.com",
    telefono: 12345,
    pase:"Pase TIC"
  }
  constructor() { }

  ngOnInit() {
  }
  guardarRegistro(forma: NgForm){

    console.log(forma);
    console.log('Valor', forma.value);
    console.log(this.usuario);
  }

}
