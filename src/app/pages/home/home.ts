import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements DoCheck {

  num: number = 1;

  ngDoCheck(): void {
    console.log('Home component checked');

  }

  adicionaNumero(): void {
    this.num++;
  }



}
