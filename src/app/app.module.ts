import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/private/admin/Login/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ListarUsuarioComponent } from './views/user/listar-usuario/listar-usuario.component';
import { ListarUsuarioInactivosComponent } from './views/user/listar-usuario-inactivos/listar-usuario-inactivos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListarUsuarioComponent,
    ListarUsuarioInactivosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
