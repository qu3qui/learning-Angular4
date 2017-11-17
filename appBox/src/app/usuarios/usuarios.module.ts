import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { AgregarUsuariosComponent } from './agregar-usuarios/agregar-usuarios.component';
import { ActualizarUsuariosComponent } from './actualizar-usuarios/actualizar-usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  declarations: [ListarUsuariosComponent, AgregarUsuariosComponent, ActualizarUsuariosComponent],
  providers: [NbSidebarService]
})
export class UsuariosModule { }
