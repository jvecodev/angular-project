// Neste arquivo é onde nós fazemos as referências das libs e componentes usados no projeto
// Baseado no modelo Standalone = false

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Users } from './pages/users/list/users';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { BaseUI } from './components/base-ui/base-ui';
import { User } from './pages/users/view/user';
import { UserCard } from './components/user-card/user-card';

@NgModule({
  declarations: [
    App,
    Home,
    Navbar,
    Footer,
    BaseUI,
    Users,
    User,
    UserCard,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
