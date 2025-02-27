import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { SociosService } from '../../services/socios.service';
import { IonicModule } from '@ionic/angular';
import { ActividadesService } from '../../services/actividades.service';

@Component({
  selector: 'app-registro-actividad',
  templateUrl: './registro-actividad.page.html',
  styleUrls: ['./registro-actividad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroActividadPage implements OnInit {
id: any;
items: any;
actividad: any = {nombre: '', dia: '', horario: ''};
esEdicion: boolean = false;

  constructor(
    private ruta : ActivatedRoute,
    private router : Router  ,
    private actividadesService : ActividadesService,
    
  ) { }

  ngOnInit() {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.obtenerRegistro(this.id);
      this.esEdicion = true
    } else {
      this.actividad = this.actividadesService.actividad;
    }
  }
  
  volverALista() {
    this.router.navigate(['/lista-actividades']);
  }

  obtenerRegistro(id:any) : void {
    this.actividadesService.getActividad(id)
    .subscribe(
      (res: any) => {
        this.items = res;
        this.actividad = this.items[0];
        console.log(this.items);
        console.log(this.actividad);
      },
      (error) => { console.error (error); }
    );
  }

  guardarRegistro(id: any): void {    
    this.actividadesService.guardarActividad(id, this.actividad);
    alert('Actividad guardada!');
    this.router.navigate(['/lista-actividades']); // this.router.navigateByUrl('/');
  }

  eliminarRegistro(id: any, nombre: string): void {
    let respuesta = confirm(`¿Desea eliminar ${nombre}?`);
    if (respuesta) {
      if (respuesta) {
        this.actividadesService.eliminarActividad(id);
        alert('actividad eliminada!');
        this.router.navigate(['/lista-actividades']);
      };
    }
  }



}

