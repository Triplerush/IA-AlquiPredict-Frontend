import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PredictService } from '../services/predict.service';

// Declaramos el componente como standalone y definimos los imports necesarios

@Component({
  selector: 'app-predict-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Importa ReactiveFormsModule y CommonModule
  templateUrl: './predict-form.component.html',
  styleUrls: ['./predict-form.component.css']

})

export class PredictFormComponent {
  predictForm: FormGroup; // Declaramos el formulario
  predictedRent: number | null = null; // Variable para almacenar la predicción
  errorMessage: string | null = null; // Variable para manejar errores
  private predictService = inject(PredictService); // Inyectamos el servicio de predicción
  private formBuilder = inject(FormBuilder); // Inyectamos el FormBuilder para crear el formulario

  constructor() {
    // Creamos el formulario con los controles necesarios y validaciones básicas
    this.predictForm = this.formBuilder.group({
      antiguedad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      banos: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      garages: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      area_techada: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      area_ocupada: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      distrito: ['', Validators.required],
    });
  }

  // Método que se llama al enviar el formulario
  onSubmit(): void {

    // Verificamos si el formulario es válido antes de enviar
    if (this.predictForm.valid) {
      const formData = this.predictForm.value;
      console.log('Datos enviados:', formData);

      // Llamamos al servicio de predicción y suscribimos al resultado
      this.predictService.predict(formData).subscribe({

        next: (response: any) => {
          console.log('Predicción recibida:', response);
          this.predictedRent = response.predicted_rent; // Actualizamos la predicción
          this.errorMessage = null; // Reiniciamos el mensaje de error
        },

        error: (error) => {
          console.error('Error al realizar la predicción:', error);
          this.predictedRent = null; // Reiniciamos la predicción en caso de error
          this.errorMessage = 'Error al realizar la predicción. Por favor, intenta de nuevo.'; // Mensaje de error
        }
      });

    } else {
      console.warn('Formulario no válido');
      this.errorMessage = 'Por favor, completa todos los campos correctamente.'; // Mensaje de error de validación

    }
  }
}