import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { SociosService } from '../../services/socios.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro-socio',
  templateUrl: './registro-socio.page.html',
  styleUrls: ['./registro-socio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroSocioPage implements OnInit {
id: any;
items: any;
socio: any;
esEdicion: boolean = false;

  constructor(
    private ruta : ActivatedRoute,
    private router : Router  ,
    private socioService : SociosService,
    
  ) { }

  ngOnInit() {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.obtenerRegistro(this.id);
      this.esEdicion = true
    } else {
      this.socio = this.socioService.socio;
    }
  }
  
  volverALista() {
    this.router.navigate(['/lista-socios']);
  }

  obtenerRegistro(id:any) : void {
    this.socioService.getSocio(id)
    .subscribe(
      (res: any) => {
        this.items = res;
        this.socio = this.items[0];
        console.log(this.items);
        console.log(this.socio);
      },
      (error) => { console.error (error); }
    );
  }

  guardarRegistro(id: any): void {    
    this.socioService.guardarSocio(id, this.socio);
    alert('Socio guardado!');
    this.router.navigate(['/lista-socios']); // this.router.navigateByUrl('/');
  }

  eliminarRegistro(id: any, nombre: string): void {
    let respuesta = confirm(`¿Desea eliminar a ${nombre}?`);
    if (respuesta) {
      if (respuesta) {
        this.socioService.eliminarSocio(id);
        alert('Socio eliminado!');
        this.router.navigate(['/lista-socios']);
      };
    }
  }



}
