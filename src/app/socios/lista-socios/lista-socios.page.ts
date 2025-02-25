import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SociosService } from 'src/app/services/socios.service';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-lista-socios',
  templateUrl: './lista-socios.page.html',
  styleUrls: ['./lista-socios.page.scss'],
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
export class ListaSociosPage implements OnInit {

  constructor(private sociosServices : SociosService,
    private router : Router
  ) { }
  socios: any;
  ngOnInit() {
    this.sociosServices.getSocios().subscribe(
      (res: any) => {
        this.socios =  res.sort((a: any, b: any) => a.apellido.localeCompare(b.apellido)); // Orden alfabético
      },
      (error) =>{
        console.error(error)
      }
    )

  }
  
  trackByNombre(index: number, socio: any): string {
    return socio.nombre; // O cualquier propiedad única del producto
  }
   
  eliminarRegistro(id: any, nombre: string): void {
    let respuesta = confirm(`¿Desea eliminar a ${nombre}?`);
    if (respuesta) {
      if (respuesta) {
        this.sociosServices.eliminarSocio(id);
        alert('Cliente eliminado!');
        this.router.navigate(['/lista-socios']);
      };
    }
  }
  
  
  

}
