import { Injectable } from '@angular/core';
import { Socio } from '../interfaces/socio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SociosService {
  
  items = [];
  socio: Socio = {
    id: 0,
    nombre: "",
    apellido: "",
    dni: "",
    fecha_nacimiento: "",
    telefono: "",
    direccion: "",
    categoria: "",
    zona_cobranza: "",
    antiguedad: "",
    estado: ""
  }

  url='http://localhost/api/datos.php?tabla=socios'

  constructor(private http: HttpClient) { }

  getSocios(): Observable<Socio[]> {
    return this.http.get<Socio[]>(`${this.url}&accion=seleccionar`);
  }

  getSocio(id: any): Observable<Socio[]> {
    return this.http.get<Socio[]>(`${this.url}&accion=seleccionar&id=${id}`);
  }

  
  guardarSocio(id: any, datos: Socio) {
    if(id > 0) {
      this.http.post(`${this.url}&accion=actualizar&id=${id}`, datos)
      .subscribe(
        res => { console.log(res) },
        err => { console.log('Ocurrió un error') }
      )
    } else {
      this.http.post(`${this.url}&accion=insertar&id=${id}`, datos)
      .subscribe(
        res => { console.log(res) },
        err => { console.log('Ocurrió un error') }
      )
    }
  }







  eliminarSocio(id: any){
    this.http.post(`${this.url}&accion=eliminar&id=${id}`, {})
      .subscribe(
        res => { console.log(res) },
        err => { console.log('Ocurrió un error') }
      )
  }

}
