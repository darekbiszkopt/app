import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kursik';

  inputText = 'Tekst';
  maxLengt = 5;
  colorClass = 'color';
  logUrl = '';

  isDisable = true;

  constructor() {
    setTimeout(() => {

      this.isDisable = false;

    }, 3000);
  }

  change() {
    this.inputText = 'Zmiana tekstu i koloru';
    this.maxLengt = 10;
    this.colorClass = 'color2';
    this.logUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

}
