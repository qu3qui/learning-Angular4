import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import Template Nebular
import { NbThemeModule } from '@nebular/theme';

// Módulos
import { UsuariosModule } from './usuarios/usuarios.module';
import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';


// Rutas
import {Routes, RouterModule} from '@angular/router';
const routes: Routes = [
  {path: '**', component: ListarUsuariosComponent}

];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NbThemeModule.forRoot({ name: 'default' }),
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
