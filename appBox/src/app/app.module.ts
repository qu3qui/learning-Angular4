import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import Template Nebular
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { NbMenuModule, NbCardModule , NbMenuService} from '@nebular/theme';

// Módulos
import { UsuariosModule } from './usuarios/usuarios.module';


// Componentes
import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { ActualizarUsuariosComponent } from './usuarios/actualizar-usuarios/actualizar-usuarios.component';


// Rutas
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'listausuarios', component: ListarUsuariosComponent},
  {path: 'agregarusuario', component: AgregarUsuariosComponent},
  {path: 'editarusuario', component: ActualizarUsuariosComponent}

];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbCardModule,
    UsuariosModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService, NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
