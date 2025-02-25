import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

// ✅ Importamos Ionicons manualmente
import { addIcons } from 'ionicons';
import { trash, create } from 'ionicons/icons';
import { personAdd, arrowBack } from 'ionicons/icons';
// ✅ Agregamos los iconos manualmente antes de bootstrapping
addIcons({
  trash,
  create,
  personAdd,
  arrowBack
});

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimations(),
    provideHttpClient()
  ],
});
