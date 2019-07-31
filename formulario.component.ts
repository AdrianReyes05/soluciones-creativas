import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  usuarios = [];
  this.crearUsuario(
    crearUsuario = {
    nombres: "",
    apellidos: "",
    cedula: "",
    correo: "",
    contrasena: ""
  };

  constructor() {}

  ngOnInit() {
    this.crearUsuario(
      "javi",
      "pastaz",
      "112222222",
      "lsalazar@yavirac.edu.ec",
      "12345"
    );
  }

  crearUsuario(
    nombres: string,
    apellidos: string,
    cedula: string,
    correo: string,
    contraseña: string
  ) {
    let usuario = {
      nombres: "",
      apellidos: "",
      cedula: "",
      correo: "",
      contrasena: ""
    };
    usuario.nombres = nombres;
    usuario.apellidos = apellidos;
    usuario.cedula = cedula;
    usuario.correo = correo;
    usuario.contrasena = contraseña;
    this.usuarios.push(usuario);
  }
}
