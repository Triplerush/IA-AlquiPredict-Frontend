import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Marcamos el servicio como standalone
@Injectable({
  providedIn: 'root' // Esto asegura que el servicio esté disponible a nivel global
})
export class PredictService {
  private http = inject(HttpClient); // Inyección de HttpClient

  // URL del backend Flask
  private apiUrl = 'https://alquipredict-app-crgxnaanpq-uc.a.run.app/predict';

  // Método para realizar la predicción
  predict(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data); // Realiza la solicitud POST al backend
  }
}

