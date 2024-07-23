import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PredictFormComponent } from './predict-form/predict-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PredictFormComponent],
  template: `
    <header class="navbar navbar-expand-lg">
      <div class="container brand">
        <a class="navbar-brand" href="#">AlquiPredict</a>
      </div>
    </header>
    <main class="container mt-1">
      <app-predict-form></app-predict-form>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IA-AlquiPredict-Frontend';
}
