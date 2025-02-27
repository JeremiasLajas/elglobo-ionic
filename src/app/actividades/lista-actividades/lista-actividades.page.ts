import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { trigger, style, transition, animate } from '@angular/animations';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-lista-actividades',
  templateUrl: './lista-actividades.page.html',
  styleUrls: ['./lista-actividades.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(10px)' }),
          animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ])
    ]
})
export class ListaActividadesPage implements OnInit {
  actividades: any;

  constructor(
    private actividadesServices: ActividadesService,
    private router : Router
  ) { }

  async ngOnInit() {
    try {
      const res = await this.actividadesServices.getActividades();
      this.actividades = res.sort((a: any, b: any) => a.nombre.localeCompare(b.nombre)); // Orden alfabético
    } catch (error) {
      console.error("Error al obtener actividades:", error);
    }
  }


  trackByNombre(index: number, actividad: any): string {
    return actividad.id; // O cualquier propiedad única del producto
  }
   
  eliminarActividad(id: any, nombre: string): void {
    let respuesta = confirm(`¿Desea eliminar ${nombre}?`);
    if (respuesta) {
      if (respuesta) {
        this.actividadesServices.eliminarActividad(id);
        alert('Cliente eliminado!');
        this.router.navigate(['/lista-actividades']);
      };
    }
  }
}
