import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importar los proveedores necesarios desde @angular/common/http
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()) // Usar provideHttpClient con los interceptores adecuados
  ]
}).catch(err => console.error(err));
