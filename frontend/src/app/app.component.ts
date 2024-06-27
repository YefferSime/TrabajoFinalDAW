// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Selector CSS para este componente
  templateUrl: './app.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./app.component.css'] // Estilos CSS específicos para este componente
})
export class AppComponent {
  // Propiedades y métodos del componente pueden ser definidos aquí

  constructor() {
    // Constructor del componente, puedes inicializar propiedades aquí si es necesario
  }
}

