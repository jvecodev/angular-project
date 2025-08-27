import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './helloworld/helloworld.component';
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { ListaTesteComponent } from './lista-test/lista-test.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorldComponent, CalculadoraComponent, ListaTesteComponent, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Hello world!';
}
