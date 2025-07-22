// Neste arquivo, definimos as rotas da aplicação Angular, a paginação e outros recursos de navegação.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Users } from './pages/users/list/users';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'users/list', component: Users},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
