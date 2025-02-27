import { Injectable } from '@angular/core';
import { Actividad } from '../interfaces/actividad';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  items = [];

  actividad: Actividad = {
    id: 0,
    nombre: '',
    dia: '',
    horario: ''
  }

  url = 'http://localhost/api/datos.php?tabla=actividades'

  constructor(private http: HttpClient) { }


  async getActividades(): Promise<Actividad[]> {
    return await lastValueFrom(this.http.get<Actividad[]>(`${this.url}&accion=seleccionar`));
  }

  getActividad(id: any): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(`${this.url}&accion=seleccionar&id=${id}`);
  }

 
  guardarActividad(id: any, datos: Actividad) {
    if (id > 0) {
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

  eliminarActividad(id: any) {
    this.http.post(`${this.url}&accion=eliminar&id=${id}`, {})
      .subscribe(
        res => { console.log(res) },
        err => { console.log('Ocurrió un error') }
      )
  }
}
