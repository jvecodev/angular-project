import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {

  username: string | null = '';

  // Aqui estamos fazendo injeção de dependência do ActivatedRoute para acessar os parâmetros da rota.
  // Fazemos desta forma para obter o parâmetro conforma o "username" definido na rota.
  // Isso é útil para exibir informações específicas do usuário na página de visualização.
  // Utilizando este metodo, o componente não sera destruido ou recriado, apeanas atualizado.

  constructor (private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getNome();
  }

  getNome(){
    this.route.queryParams.subscribe(params => {
      // Objeto passado no html
      this.username = params['username'];
    })
  }



}
