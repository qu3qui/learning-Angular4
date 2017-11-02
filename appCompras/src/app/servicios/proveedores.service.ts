import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  proveedores: any = [
    {
      nombre: 'Telefonica',
      cif: 'B12345678',
      direccion: 'Paseo de la castellana',
      cp: '2B.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 9111,
      email: 'info@telefonica.com',
      contacto: 'Juan Perez'
    },
    {
      nombre: 'Iberdrola',
      cif: 'B87654213',
      direccion: 'Principe de Vergara',
      cp: '2B.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 877855,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martinez'
    }
  ];
  constructor() { }

  getProveedores() {
    return this.proveedores;
  }



}
