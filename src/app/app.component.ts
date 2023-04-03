import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Contador App';
  numero = 10;

  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
