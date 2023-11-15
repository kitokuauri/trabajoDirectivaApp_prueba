import { Component } from '@angular/core';
import { ServiciosEmpleadosService } from './servicios-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje="";
  registrado=false;

  nombre:string="";
  apellido:string="";

  entradas:Array<{titulo:string}>;

  // agregamos un cargo
  cargo:string="";

  today: Date;

  constructor(private miServicio:ServiciosEmpleadosService){
    this.today=new Date();
    this.entradas=[
      {titulo:"Mi primera entrada del blog."},
      {titulo:"Mi segunda entrada del blog."},
      {titulo:"Mi tercera entrada del blog."},
      {titulo:"Mi cuarta entrada del blog."},
      {titulo:"Mi quinta entrada del blog."},
    ]
  }

  

  registrarUsuario(){
    this.registrado=true;
    this.miServicio.muestraMensaje("He incorporado mi servicio");
    this.mensaje="Usuario registrado correctamente";
  }
}
