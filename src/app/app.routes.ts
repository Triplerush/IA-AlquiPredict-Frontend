import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { PredictFormComponent } from './predict-form/predict-form.component';

export const routes: Route[] = [
  { path: '', component: PredictFormComponent }, // Ruta para el formulario de predicción
  // Puedes añadir más rutas aquí
];