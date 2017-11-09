import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  presURL = 'https://comprasapp-d5cd2.firebaseio.com/presupuestos.json';

  constructor(private http: Http) {


   }
   postPresupuesto(presupuesto: any){
     const newpress = JSON.stringify(presupuesto);
     const headers = new Headers({
       'Content-Type': 'application/json'
     });

     return this.http.post(this.presURL, newpress, {headers}).map(res => {
       console.log(res.json());
       return res.json;
     });
   }



}
