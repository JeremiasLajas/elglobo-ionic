import { Component } from '@angular/core';
import {  IonicModule} from '@ionic/angular';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ])
    ]),

    // Animación del globo volando
    trigger('flyAway', [
      transition(':enter', [
        animate('3s ease-in-out', keyframes([
          style({ transform: 'translateY(0) scale(1)', opacity: 1, offset: 0 }),
          style({ transform: 'translateY(-50px) scale(1.1)', opacity: 1, offset: 0.3 }),
          style({ transform: 'translateY(-100px) scale(1.2)', opacity: 0.8, offset: 0.5 }),
          style({ transform: 'translateY(-200px) scale(1.3)', opacity: 0.5, offset: 0.8 }),
          style({ transform: 'translateY(-300px) scale(1.4)', opacity: 0, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HomePage {
  constructor() {}

  
}
